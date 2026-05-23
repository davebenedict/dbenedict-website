# Blog System Guide

## ✅ Your Blog is Ready!

Your blog now uses markdown files for posts. It's simple, fast, and easy to manage!

## How to Add a New Blog Post

### Step 1: Create a New Markdown File

Create a new `.md` file in `content/blog/` with this format:

**Filename:** `content/blog/my-post-title.md`

**Content:**
```markdown
---
title: "Your Post Title"
date: "2026-05-22"
excerpt: "A short description of your post (shows on blog listing)"
category: "Tutorial"
author: "David Benedict"
---

# Your Post Title

Write your content here using markdown!

## Subheading

You can use:
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- `Code snippets`
- Lists
- And more!

```code blocks```

Images, tables, etc.
```

### Step 2: Deploy

```bash
git add content/blog/my-post-title.md
git commit -m "Add new blog post: My Post Title"
git push
```

That's it! Your post will appear automatically on https://www.dbenedict.com/personal/blog

## Current Blog Posts

I've created 3 sample posts for you:

1. **Welcome to My Blog** - Introduction post
2. **Getting Started with Next.js** - Tutorial post
3. **My Development Setup** - Productivity post

Feel free to edit or delete these!

## Markdown Syntax Guide

### Headings
```markdown
# H1
## H2
### H3
```

### Text Formatting
```markdown
**bold**
*italic*
***bold and italic***
~~strikethrough~~
```

### Links
```markdown
[Link text](https://url.com)
```

### Lists
```markdown
- Bullet point
- Another point

1. Numbered
2. List
```

### Code
```markdown
Inline `code`

```javascript
// Code block
const hello = "world";
```
```

### Quotes
```markdown
> This is a quote
```

### Images
```markdown
![Alt text](image-url.jpg)
```

## Post Metadata (Front Matter)

The section between `---` at the top is metadata:

- **title**: Post title (required)
- **date**: Format: `YYYY-MM-DD` (required)
- **excerpt**: Short description for listing page (required)
- **category**: Category name (required)
- **author**: Your name (required)

## File Naming

Use lowercase with hyphens:
- ✅ `my-awesome-post.md`
- ✅ `getting-started-with-react.md`
- ❌ `My Awesome Post.md`
- ❌ `getting_started_with_react.md`

The filename becomes the URL slug:
- `my-awesome-post.md` → `/personal/blog/my-awesome-post`

## Editing Existing Posts

1. Open the `.md` file in `content/blog/`
2. Make your changes
3. Commit and push:
   ```bash
   git add content/blog/your-post.md
   git commit -m "Update blog post"
   git push
   ```

## Deleting Posts

1. Delete the `.md` file from `content/blog/`
2. Commit and push:
   ```bash
   git rm content/blog/post-to-delete.md
   git commit -m "Remove blog post"
   git push
   ```

## Blog Features

✅ **Automatic listing** - All posts show on blog page  
✅ **Individual post pages** - Each post has its own URL  
✅ **Sorted by date** - Newest posts first  
✅ **Categories** - Organize posts by topic  
✅ **Excerpts** - Short descriptions on listing page  
✅ **Formatted content** - Markdown converted to HTML  
✅ **Responsive design** - Works on all devices  
✅ **Dark mode** - Automatic theme support  

## Tips

### Writing Tips
- Keep excerpts under 150 characters
- Use descriptive titles
- Break up long posts with headings
- Add code examples when relevant
- Proofread before publishing

### SEO Tips
- Use descriptive titles
- Write good excerpts (they're like meta descriptions)
- Use headings (H2, H3) to structure content
- Link to other relevant posts

### Organization
- Use consistent categories
- Date posts accurately
- Keep filenames descriptive

## Example Post Template

Save this as `content/blog/template.md`:

```markdown
---
title: "Your Amazing Post Title"
date: "2026-05-22"
excerpt: "A compelling one-sentence description that makes people want to read more."
category: "Tutorial"
author: "David Benedict"
---

# Your Amazing Post Title

Start with a hook - why should someone read this?

## Introduction

Set the context and explain what you'll cover.

## Main Content

Break your content into logical sections with headings.

### Subsection

Use subsections for detailed topics.

## Code Examples

```javascript
// Show, don't just tell
const example = "code";
```

## Conclusion

Summarize key points and provide next steps.

---

*Have questions? [Get in touch](/personal/contact)!*
```

## Upgrading to CMS Later

This markdown system is great for getting started. When you're ready for more features (image uploads, draft posts, scheduling, etc.), you can upgrade to Sanity CMS. Your existing posts can be migrated.

## Troubleshooting

### Post not showing up?
- Check the filename ends with `.md`
- Verify the front matter is correct (between `---`)
- Make sure you committed and pushed
- Wait 1-2 minutes for deployment

### Formatting looks wrong?
- Check your markdown syntax
- Make sure code blocks use triple backticks
- Verify headings start with `#`

### Date not sorting correctly?
- Use format: `YYYY-MM-DD` (e.g., `2026-05-22`)
- Don't use slashes or other formats

## Need Help?

Check out these markdown resources:
- [Markdown Guide](https://www.markdownguide.org/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Happy blogging! 📝
