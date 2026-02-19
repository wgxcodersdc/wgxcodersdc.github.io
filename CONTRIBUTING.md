# Contributing to WGXC DC Website

## Prerequisites

- **Ruby 3.3.6** — we recommend using [rbenv](https://github.com/rbenv/rbenv) to manage Ruby versions
- **Bundler** — installed with `gem install bundler`
- **Git**

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/wgxcodersdc/wgxcodersdc.github.io.git
   cd wgxcodersdc.github.io
   ```

2. **Install Ruby (if needed)**

   If you use rbenv, the `.ruby-version` file will automatically select Ruby 3.3.6. Install it if you haven't already:

   ```bash
   rbenv install 3.3.6
   ```

3. **Install dependencies**

   ```bash
   bundle install
   ```

4. **Run the local development server**

   ```bash
   bundle exec jekyll serve
   ```

   The site will be available at [http://localhost:4000](http://localhost:4000). Changes to files (except `_config.yml`) will auto-reload.

## Making Changes

1. Create a new branch from `main`:

   ```bash
   git checkout -b your-branch-name
   ```

2. Make your changes and verify them locally.

3. Commit your changes and push:

   ```bash
   git push -u origin your-branch-name
   ```

4. Open a pull request against `main`.

## Project Structure

| Path | Description |
|------|-------------|
| `_includes/` | Reusable HTML partials (header, footer, social links) |
| `_posts/` | Blog posts (Markdown, named `YYYY-MM-DD-title.markdown`) |
| `assets/custom.css` | Custom styles (appended after Minima theme styles) |
| `logos/` | Logo files in SVG and PNG at various sizes |
| `_config.yml` | Site configuration (requires server restart on change) |

## Style Guide

- **Font**: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Brand red**: `#e81b39`
- **Brand navy**: `#003380`

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the GitHub Actions workflow in `.github/workflows/jekyll.yml`.
