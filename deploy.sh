#!/usr/bin/env bash
set -euo pipefail

export GIT_TERMINAL_PROMPT=0

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

PORT="${PORT:-4173}"
BASE_URL="http://127.0.0.1:${PORT}"
COMMIT_MESSAGE="update portfolio site"
CHECK_ONLY=0
PUSH_CHANGES=1
SERVER_PID=""

usage() {
  cat <<'USAGE'
Usage:
  ./deploy.sh
  ./deploy.sh "update homepage copy"
  ./deploy.sh --message "update project details"
  ./deploy.sh --check-only
  ./deploy.sh --no-push "update local content"

Options:
  --check-only       Run local checks only. Do not commit or push.
  --no-push          Commit changes but skip git push.
  -m, --message      Commit message. Defaults to "update portfolio site".
  -h, --help         Show this help.

Environment:
  PORT=4173          Local preview port used for checks.
USAGE
}

cleanup() {
  if [[ -n "$SERVER_PID" ]]; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

while [[ $# -gt 0 ]]; do
  case "$1" in
    --check-only)
      CHECK_ONLY=1
      PUSH_CHANGES=0
      shift
      ;;
    --no-push)
      PUSH_CHANGES=0
      shift
      ;;
    -m|--message)
      shift
      if [[ $# -eq 0 ]]; then
        echo "Missing commit message after --message." >&2
        exit 1
      fi
      COMMIT_MESSAGE="$1"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      COMMIT_MESSAGE="$1"
      shift
      ;;
  esac
done

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

echo "==> Project type"
if [[ -f package.json ]]; then
  echo "package.json found. Review build settings before deploying."
else
  echo "Static HTML/CSS/JS site. No build step required."
fi

echo "==> Checking required files"
for file in index.html assets/site.css assets/site.js; do
  if [[ ! -f "$file" ]]; then
    echo "Missing required file: $file" >&2
    exit 1
  fi
done

if command -v node >/dev/null 2>&1; then
  echo "==> Checking JavaScript syntax"
  node --check assets/site.js
else
  echo "Skipping JavaScript syntax check because node is not installed."
fi

require_command python3
require_command curl
require_command git

echo "==> Starting local preview check"
if curl -fsS "$BASE_URL/" >/dev/null 2>&1; then
  echo "Using existing server at $BASE_URL"
else
  python3 -m http.server "$PORT" --bind 127.0.0.1 >/tmp/jk-portfolio-preview.log 2>&1 &
  SERVER_PID="$!"
  sleep 1
fi

if ! curl -fsS "$BASE_URL/" | grep -q "JK | Product Systems"; then
  echo "Local preview did not return the expected site. Check $BASE_URL" >&2
  exit 1
fi

echo "==> Checking referenced assets"
while IFS= read -r asset; do
  [[ -z "$asset" ]] && continue
  if [[ ! -f "$asset" ]]; then
    echo "Missing referenced asset: $asset" >&2
    exit 1
  fi

  curl -fsS -o /dev/null "$BASE_URL/$asset"
done < <(
  grep -Eo '(src|href)="[^"]+"' index.html \
    | sed -E 's/^(src|href)="([^"]+)"/\2/' \
    | sed -E 's/[?#].*$//' \
    | grep '^assets/' \
    | sort -u
)

echo "Local checks passed."

if [[ "$CHECK_ONLY" -eq 1 ]]; then
  echo "Check-only mode finished. No commit or push was made."
  exit 0
fi

echo "==> Checking git repository"
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This folder is not a git repository." >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "==> Committing changes"
  git add .
  git commit -m "$COMMIT_MESSAGE"
else
  echo "No local changes to commit."
fi

if [[ "$PUSH_CHANGES" -eq 1 ]]; then
  if ! git remote get-url origin >/dev/null 2>&1; then
    echo "No git remote named origin. Add one before pushing." >&2
    exit 1
  fi

  branch="$(git branch --show-current)"
  if [[ -z "$branch" ]]; then
    echo "Could not detect current git branch." >&2
    exit 1
  fi

  echo "==> Checking GitHub push authentication"
  push_check_output=""
  if ! push_check_output="$(git push --dry-run -u origin "$branch" 2>&1)"; then
    if grep -Eqi 'authentication failed|could not read (Username|Password)|terminal prompts disabled|permission denied \(publickey\)|repository not found|access denied|HTTP 403' <<<"$push_check_output"; then
      echo "GitHub 推送认证不可用，请先在本机终端执行 gh auth login 和 gh auth setup-git。" >&2
    else
      echo "GitHub 推送预检查失败：" >&2
      echo "$push_check_output" >&2
    fi
    exit 1
  fi

  echo "==> Pushing to origin/$branch"
  if ! git push -u origin "$branch"; then
    echo "GitHub 推送失败，未检查 Vercel。" >&2
    exit 1
  fi
  echo "部署推送完成"
else
  echo "Push skipped."
fi
