# AGENTS.md — JK Portfolio Site

## Project context

This is a personal portfolio website: JK | Product Systems.
It is a static website built with HTML, CSS, and JavaScript.

Main files:
- index.html
- assets/site.css
- assets/site.js
- assets/images/

The website is already deployed online. Most tasks are UI refinement, layout cleanup, visual consistency, and interaction polishing.

## Core working rules

1. Do not create hidden legacy DOM to fake removal.
   Do not use `display:none`, `visibility:hidden`, `opacity:0`, `max-height:0`, off-screen positioning, or z-index tricks to hide deprecated modules, buttons, images, or text.

2. If a module, button, image, illustration, text block, or UI element is explicitly no longer needed, remove it from the real source:
   - remove HTML from `index.html`
   - remove JS-generated DOM from `assets/site.js`
   - remove dedicated CSS from `assets/site.css`

3. Hidden UI is only allowed when it is a real interaction pattern, such as:
   - drawer
   - modal
   - dropdown
   - hover reveal
   - mobile menu
   - accessibility-only helper text

4. Do not add bottom-of-file override patches unless explicitly requested.
   Avoid piling repeated selectors at the end of `assets/site.css`.

5. Do not abuse `!important`.
   Use it only when there is no safer selector-level solution, and explain why.

6. Prefer cleaning existing rules over adding another override layer.

7. Do not change unrelated layout, content, navigation, images, or interactions.

## UI modification rules

For visual changes:
- Keep the current visible structure stable unless the task explicitly asks to change it.
- Avoid changing HTML when the task only requires spacing, color, size, opacity, or hover adjustment.
- Avoid large rewrites.
- Do not modify multiple modules when the task targets one module.

For deletion/removal tasks:
- Deletion means source removal, not CSS hiding.
- After deletion, search the codebase to confirm related keywords are 0 matches.
- Remove dedicated CSS and JS generation logic together.

## Required validation after each task

After every modification, output:

1. Modified files.
2. Deleted DOM / CSS / JS generation logic, if any.
3. Whether any new hidden rules were added:
   - display:none
   - visibility:hidden
   - opacity:0
   - max-height:0
   - aria-hidden
   - hidden
4. Keyword search results for removed targets.
5. Playwright screenshot verification for:
   - 1280x720
   - 1440x900
   - 390x844
6. Whether visible rendering changed outside the requested scope.
7. Whether any unexpected image requests appeared in Network.

## Website-specific cautions

Known previous issue:
- Old hidden banner DOM remained in `index.html` while CSS set `.home-banner-section { display:none; }`.
- This caused DOM/text extraction tools to detect old resources that users could not see.

Avoid repeating this pattern.

If removing obsolete UI such as banner, CTA, evidence text, hover notes, or old illustrations:
- delete the source structure
- delete the dedicated CSS
- delete JS-generated fragments
- verify by full-text search

## Output style

Be concise.
Do not claim success without showing verification.
If a task cannot be safely completed without affecting visible layout, stop and explain before modifying.


