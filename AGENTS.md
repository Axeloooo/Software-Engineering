# AGENTS.md

This file provides guidance to AI Agents when working with code in this repository.

## Project Overview

This is a curated **mdBook** knowledge base covering software engineering topics, interview preparation (LeetCode), C++, Azure cloud, design patterns, and quantum computing. Content lives in `/src` as Markdown files; the build system generates a static HTML site deployed to GitHub Pages.

## Commands

```bash
make install    # Install mdbook, mdbook-tabs and mdbook-mermaid via cargo (one-time setup)
make build      # Compile Markdown into ./book (static HTML)
make run        # Serve locally at http://localhost:3000 and open browser
make clean      # Remove the ./book build artifact
```

Raw alternatives if `make` is unavailable:

```bash
mdbook build
mdbook serve --open
```

There are no test suites. The build (`mdbook build`) itself is the verification step — it fails if content is malformed.

## Content Architecture

```
src/
├── SUMMARY.md          # Table of contents (must be updated when adding pages)
├── quantum/            # Quantum physics, information, computation
├── azure/              # Microsoft Azure service topics
├── cpp/                # C++ fundamentals (14 chapters)
├── design_patterns/    # Creational, Structural, Behavioral patterns
├── leetcode/           # Algorithm interview prep by category
└── images/             # Shared image assets
```

**SUMMARY.md is the source of truth for navigation.** Any new `.md` file must be linked in `SUMMARY.md` or it won't appear in the built book.

## Key Configuration

- **book.toml** — mdBook settings; enables `mdbook-tabs` preprocessor, MathJax for math rendering, and custom theme files
- **theme/** — Custom CSS (`tabs.css`) and JS (`tabs.js`) for tabbed content; `toc.js.hbs` for TOC template
- **.releaserc** — Semantic release config; commit messages drive automatic versioning on `main`

## Tabbed Content Syntax

The `mdbook-tabs` plugin enables tabbed content via preprocessor directives:

```markdown
{{#tabs}}

{{#tab name="Tab 1"}}
Content for tab 1.
{{/endtab}}

{{#tab name="Tab 2"}}
Content for tab 2.
{{/endtab}}

{{/endtabs}}
```

## Math Rendering

MathJax is enabled. Use standard LaTeX delimiters:

- Inline: `\\( expression \\)`
- Block: `\\[ expression \\]`

## Branch Strategy

- `main` — stable, triggers GitHub Pages deploy and semantic release
- `devel` — integration branch; PRs target this
- `feature/*` — topic branches for individual chapters
