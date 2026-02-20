# Contributing to WGXC DC Website

## Prerequisites

- **Ruby 3.3.6** -- we recommend using [rbenv](https://github.com/rbenv/rbenv) to manage Ruby versions
- **Bundler** -- installed with `gem install bundler`
- **Git**

## Getting Started

1. **Fork and clone the repository**
   
   ```bash
   git clone https://github.com/<your-github-user>/wgxcodersdc.github.io
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

   The site will be available at [http://localhost:4000](http://localhost:4000). Changes to most files will auto-reload in your browser. **Exception:** changes to `_config.yml` require you to stop the server (Ctrl+C) and restart it.

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

## How the Site Works

This site is built with [Jekyll](https://jekyllrb.com/), a static site generator, using the [Minima](https://github.com/jekyll/minima) theme. Here's what that means in practice:

- **Jekyll** reads Markdown (`.markdown`) files, HTML templates, and YAML data files, then generates a complete static website in the `_site/` folder.
- **Minima** is a pre-built theme that provides the base HTML structure (header, footer, navigation, typography, etc.). We customize it by overriding specific files in `_includes/` and `_layouts/`.
- **You do NOT need to know HTML** to update most content. Frequently-changed content (stats, events, links) lives in simple YAML files in the `_data/` folder. You just edit the text values.

### What is YAML?

YAML is a simple text format used for structured data. Here's a quick example:

```yaml
- number: "800+"
  label: Meetup Members
- number: "4,000+"
  label: Slack Members
```

Key rules:
- **Indentation matters** -- use 2 spaces (not tabs)
- **Dashes (`-`)** start a new item in a list
- **Colons (`:`)** separate a key from its value
- **Quotes** are needed around values that contain special characters like `+`, `~`, `,`, `&`, or HTML tags

### What is Markdown?

Markdown is a simple text format for writing content. Pages like `about.markdown` and `community.markdown` use it. Here's a quick reference:

```markdown
## This is a heading

This is a paragraph.

**This is bold text**

- This is a bullet point
- Another bullet point

[This is a link](https://example.com)
```

Full reference: [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

## Project Structure

```
wgxcodersdc.github.io/
├── _config.yml              # Site settings (title, email, nav links)
├── _data/                   # YAML data files (stats, events, links)
│   ├── stats.yml            # Community numbers (homepage + donate page)
│   ├── event_categories.yml # "What We Do" cards on homepage
│   ├── event_highlights.yml # Featured event cards with photos
│   ├── join_links.yml       # Meetup/Slack/LinkedIn/YouTube links
│   ├── goals.yml            # Yearly goals on donate page
│   ├── donate_activities.yml# "What We Do" on donate page
│   └── donation_usage.yml   # "How Donations Are Used" on donate page
├── _includes/               # HTML partials (header, footer, etc.)
├── _layouts/                # Page templates
│   ├── homepage.html        # Homepage layout (extends Minima default)
│   └── donate.html          # Donate page layout (extends Minima default)
├── _posts/                  # Blog posts (YYYY-MM-DD-title.markdown)
├── assets/
│   ├── custom.css           # All custom styles
│   └── images/events/       # Event photos
├── logos/                   # Logo files (SVG and PNG at various sizes)
├── index.html               # Homepage (just front matter, uses homepage layout)
├── donate.html              # Donate page (just front matter, uses donate layout)
├── blog.html                # Blog listing page
├── about.markdown           # About page
├── community.markdown       # Get Involved page
└── event-interest-form.markdown # Talk proposal form (embedded Google Form)
```

## Common Tasks

### Update community statistics

Edit `_data/stats.yml`. These numbers appear on both the **homepage** and **donate page** automatically.

```yaml
- number: "800+"
  label: Meetup Members
- number: "4,000+"
  label: Slack Members
- number: "~15"
  label: Events Per Year
- number: "2024"
  label: Year Founded
```

To update a number, change the `number` value. Keep quotes around values with special characters (`+`, `~`, `,`). For example, to update Meetup members to 1,000+:

```yaml
- number: "1,000+"
  label: Meetup Members
```

### Update the Slack invite link

The Slack link appears in two places. Update **both**:

1. **`_data/join_links.yml`** -- the `url` field for the Slack entry (used on the homepage "Find Your Place Here" section)
2. **`community.markdown`** -- the Slack links in the "Join Our Platforms" and "Volunteer With Us" sections

### Update yearly goals on the donate page

Edit `_data/goals.yml`. Change the `year` value and update the `items` list:

```yaml
year: 2026
items:
  - "Continue to <strong>grow our Meetup community</strong>"
  - "Enable us to consistently have <strong>2 or more events per month</strong>, with a goal of <strong>24 sessions</strong> by end of year!"
  - Expand partnerships with other DC-area tech communities
```

Note: items can contain HTML like `<strong>bold text</strong>` for emphasis. Wrap those items in quotes.

### Add a new event highlight to the homepage

Edit `_data/event_highlights.yml` and add a new entry. Each entry needs:

```yaml
- title: Event Name Here
  date: "Month Year &middot; attendee count"
  image: /assets/images/events/your-image-filename.jpg
  image_alt: Description of the image for accessibility
  image_width: 760
  image_height: 427
  description: "A brief description of the event."
  position: 1
```

Steps:
1. Add your event photo to `assets/images/events/` (recommended: 760x427px or similar 16:9 ratio)
2. Add the entry to the YAML file
3. The `position` field (1-4) controls which gradient color shows as a fallback while the image loads (1=navy, 2=green, 3=red, 4=purple)
4. There are currently 4 highlights. To replace one, edit its entry. To reorder, rearrange the entries in the file.

### Add a new event category to "What We Do"

Edit `_data/event_categories.yml`:

```yaml
- title: Category Name
  color_key: workshops
  icon: fa-solid fa-laptop-code
  description: A brief description of this category.
  examples:
    - Example Event Name 1
    - Example Event Name 2
```

The `color_key` determines the icon circle color:

| color_key | Color |
|-----------|-------|
| `workshops` | Navy |
| `career` | Red |
| `social` | Green |
| `community` | Purple |

Find icon names at [fontawesome.com/icons](https://fontawesome.com/search?o=r&m=free&s=solid).

### Update how donations are used

Edit `_data/donation_usage.yml`:

```yaml
- label: Category name
  detail: "&mdash; description of how funds are used."
```

Note: `&mdash;` renders as an em dash (--). Wrap values containing HTML entities in quotes.

### Add a new blog post

Create a new file in `_posts/` named `YYYY-MM-DD-your-title.markdown`:

```markdown
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
---

Your post content here in Markdown.
```

The newest post will automatically appear in:
- The **Blog** page (`/blog/`)
- The **"From Our Blog"** section on the homepage (always shows the single most recent post)

### Add or reorder header navigation links

Edit `_config.yml` and update the `header_pages` list:

```yaml
header_pages:
  - about.markdown
  - blog.html
  - community.markdown
```

Each entry is a filename. The display text comes from the page's `title` in its front matter. The **Donate** button is hardcoded in `_includes/header.html` and always appears last.

**Remember:** changes to `_config.yml` require restarting the Jekyll server.

### Edit page content

| Page | File to edit | What's in it |
|------|-------------|--------------|
| Homepage | `_layouts/homepage.html` | Hero section, section headings, support CTA |
| Homepage content | `_data/*.yml` files | Stats, events, highlights, links (see sections above) |
| Donate | `_layouts/donate.html` | Mission statement, tax info, donate CTA |
| Donate content | `_data/goals.yml`, `_data/donation_usage.yml`, `_data/donate_activities.yml` | Goals, usage breakdown, activities |
| About | `about.markdown` | Mission, code of conduct |
| Get Involved | `community.markdown` | Platform links, speaker info, volunteer info |
| Blog | `_posts/YYYY-MM-DD-title.markdown` | Individual blog posts |

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the GitHub Actions workflow in `.github/workflows/jekyll.yml`.

## Getting Help

- **Jekyll docs:** [jekyllrb.com/docs](https://jekyllrb.com/docs/)
- **Minima theme:** [github.com/jekyll/minima](https://github.com/jekyll/minima)
- **YAML syntax:** [learnxinyminutes.com/docs/yaml](https://learnxinyminutes.com/docs/yaml/)
- **Questions?** Email [dc@wgxcodersdc.org](mailto:dc@wgxcodersdc.org)
