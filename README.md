# 📘 Software Engineering Documentation

[![Build](https://github.com/Axeloooo/Software-Engineering/actions/workflows/build.yml/badge.svg)](https://github.com/Axeloooo/Software-Engineering/actions/workflows/build.yml)
[![Deploy](https://github.com/Axeloooo/Software-Engineering/actions/workflows/deploy.yml/badge.svg)](https://github.com/Axeloooo/Software-Engineering/actions/workflows/deploy.yml)
[![Release](https://github.com/Axeloooo/Software-Engineering/actions/workflows/release.yml/badge.svg)](https://github.com/Axeloooo/Software-Engineering/actions/workflows/release.yml)
[![GitHub Tag](https://img.shields.io/github/v/tag/Axeloooo/Software-Engineering)](https://github.com/Axeloooo/Software-Engineering/tags)
[![License](https://img.shields.io/github/license/Axeloooo/Software-Engineering)](./src/LICENSE.md)
[![Repo Size](https://img.shields.io/github/repo-size/Axeloooo/Software-Engineering)](https://github.com/Axeloooo/Software-Engineering)
[![Issues](https://img.shields.io/github/issues/Axeloooo/Software-Engineering)](https://github.com/Axeloooo/Software-Engineering/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/Axeloooo/Software-Engineering)](https://github.com/Axeloooo/Software-Engineering/pulls)
[![Contributors](https://img.shields.io/github/contributors/Axeloooo/Software-Engineering)](https://github.com/Axeloooo/Software-Engineering/graphs/contributors)

A curated **mdBook** knowledge base for software engineering topics, interview prep, cloud services, design patterns, and quantum computing notes. The project is built as a personal reference that is also organized well enough to be useful as a public learning resource.

It currently includes study material for **C++**, **LeetCode**, **Microsoft Azure**, **design patterns**, and **quantum topics**, with CI workflows that verify the book builds successfully on every push, pull request, and manual dispatch.

## ✨ Table of Contents

- [🎯 Why This Repo Exists](#-why-this-repo-exists)
- [🧭 What Youll Find Inside](#-what-youll-find-inside)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📚 Available Commands](#-available-commands)
- [🗂 Project Structure](#-project-structure)
- [🔄 CI/CD](#-cicd)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Why This Repo Exists

This repository is designed to be:

- A **personal reference library** for reviewing important software engineering concepts quickly.
- A **living study guide** that grows over time as new topics are added and refined.
- A **public documentation project** that is easy to browse, run locally, and contribute to.

## 🧭 What You'll Find Inside

The book is organized into focused sections:

- **Quantum**: quantum physics, information, and computation notes.
- **Microsoft Azure**: AI, compute, networking, storage, monitoring, security, and governance topics.
- **Design Patterns**: creational, structural, and behavioral patterns.
- **LeetCode**: categorized problem notes for arrays, trees, hashmaps, intervals, math, and more.
- **C++**: object-oriented programming, pointers, templates, STL, operator overloading, and related fundamentals.

## 🛠 Tech Stack

- **[mdBook](https://github.com/rust-lang/mdBook)** for static documentation generation.
- **Rust + Cargo** for installing and running the documentation toolchain.
- **MathJax** for rendering equations.
- **mdbook-tabs** for tabbed content support.
- **GitHub Actions** for build, deploy, and release automation.
- **Markdown** as the authoring format for all content.

## 🚀 Getting Started

### Prerequisites

Install [Rust](https://www.rust-lang.org/tools/install) first so `cargo` is available.

### Install the documentation toolchain

```bash
cargo install mdbook
cargo install mdbook-tabs
```

### Clone the repository

```bash
git clone git@github.com:Axeloooo/Software-Engineering.git
cd Software-Engineering
```

### Run the book locally

```bash
make run
```

Then open the local server shown by `mdbook serve`.

## 📚 Available Commands

### Make targets

```bash
make build      # Build the book into ./book
make run        # Serve the book locally and open it in the browser
make clean      # Remove the generated ./book directory
make install    # Install mdbook via cargo
make uninstall  # Uninstall mdbook via cargo
```

### Raw mdBook commands

```bash
mdbook build
mdbook serve --open
```

## 🗂 Project Structure

```text
.
├── .github/workflows/   # CI/CD pipelines
├── book.toml            # mdBook configuration
├── Makefile             # Convenience commands
├── src/                 # Book content
│   ├── azure/
│   ├── cpp/
│   ├── design_patterns/
│   ├── leetcode/
│   └── quantum/
└── theme/               # Custom mdBook theme overrides
```

## 🔄 CI/CD

The repository includes GitHub Actions workflows for:

- **Build**: checks that the mdBook compiles successfully.
- **Deploy**: publishes the generated site to GitHub Pages.
- **Release**: handles release automation.

This helps keep the documentation publishable and prevents broken mdBook configuration changes from slipping into the default branch.

## 🤝 Contributing

Contributions are welcome, especially for:

- fixing mistakes or outdated explanations
- improving structure and readability
- adding new notes or examples
- expanding unfinished sections

If you contribute, keep changes focused, prefer clear section headings, and run:

```bash
mdbook build
```

before opening a pull request.

## 📄 License

This project is licensed under the [Apache License 2.0](./src/LICENSE.md).
