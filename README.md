# JK Product Systems Portfolio

个人产品经理作品集网站，展示企业级产品、产品标准化、政企方案与 AI 应用相关的项目经历、材料体系和职业路径。

## Project Type

纯静态 HTML / CSS / JavaScript 项目，无前端框架、无打包构建流程。

## Local Development

```bash
python3 -m http.server 4173
```

打开：

```text
http://localhost:4173/
```

## Build

当前项目不需要构建。

```bash
# No build command required
```

## Deployment

建议使用 GitHub + Vercel 部署。

Vercel 参数：

- Framework Preset: Other
- Install Command: 留空
- Build Command: 留空
- Output Directory: `.`
- Environment Variables: 不需要

## Update Workflow

后续更新网站时：

```bash
git add .
git commit -m "update portfolio site"
git push
```

Vercel 连接 GitHub 仓库后，会在每次 push 后自动重新部署。

也可以使用维护脚本自动完成本地检查、提交和推送：

```bash
./deploy.sh "update portfolio site"
```

只做本地检查、不提交不推送：

```bash
./deploy.sh --check-only
```
