# Software Engineering Documentation

[![Deploy](https://github.com/Axeloooo/mdbook/actions/workflows/deploy.yaml/badge.svg)](https://github.com/Axeloooo/mdbook/actions/workflows/deploy.yaml)
[![Release](https://github.com/Axeloooo/mdbook/actions/workflows/release.yaml/badge.svg)](https://github.com/Axeloooo/mdbook/actions/workflows/release.yaml)

Software Engineering is a comprehensive collection of notes, tutorials, and reference materials from C++, C#, to exploring the expansive realms of Azure and AWS cloud services.

## Documentation

- [Setup](#setup)
- [Quick Start](#quick-start)
- [Other Commands](#other-commands)
- [Git Workflow](#git-workflow)
- [Branch Naming Convention](#branch-naming-convention)
- [Commit Message Convention](#commit-message-convention)
- [Contributors](#contributors)
- [License](#license)

## Setup

> [!IMPORTANT]
>
> If you are using Windows or Linux, you need to install the following programs using the package manager of your operating system. The following instructions use Homebrew, which is a package manager for Mac OS.

The following programs should be installed:

- [Rust](https://www.rust-lang.org/tools/install)

## Quick Start

1. Install ![Rust](https://www.rust-lang.org/tools/install)

2. Install mdbook

```bash
$ cargo install mdbook
```

23. Clone the repository

```bash
$ git clone git@github.com:Axeloooo/mdbook.git
```

4. Change directory to the project folder

```bash
$ cd mdbook
```

5. Run the mdbook

```bash
$ cargo serve --open
```

## Other Commands

- Uninstall mdbook

```bash
$ cargo uninstall mdbook
```

- Build the book

```bash
$ mdbook build
```

## Git Workflow

- The `devel` branch is the default branch.
- The `main` branch is the production branch.

## Branch Naming Convention

- Feature branches should be named as `feature/<feature-name>`.
- Bugfix branches should be named as `fix/<bugfix-name>`.

The branche name should be in the following format:

```bash
git checkout -b feature/add-chapter-for-this-topic
```

## Commit Message Convention

The basic structure includes:

- `fix`: for bug fixes
- `feat`: for new features

The commit message should be in the following format:

```bash
git commit -m "feat: Added chapter for this topic"
```

## Contributors

- [Axel Sanchez](https://github.com/Axeloooo)

## License

[MIT](https://opensource.org/licenses/MIT)
