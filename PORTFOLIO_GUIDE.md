# Portfolio Setup Guide

## Overview

I've created **two portfolio options** for displaying your GitHub projects:

### Option 1: Static Portfolio
**URL:** `https://www.dbenedict.com/personal/portfolio`

- Manually curated projects
- Full control over what's displayed
- Edit `src/app/personal/portfolio/page.tsx` to add/remove projects

### Option 2: Dynamic Portfolio (Recommended)
**URL:** `https://www.dbenedict.com/personal/portfolio-dynamic`

- **Automatically syncs** with your GitHub account
- Shows all public repositories
- Sorted by stars
- Updates every hour (cached)

## How to Use

### Dynamic Portfolio (Automatic)

The dynamic portfolio is already set up and will automatically display all your public GitHub repositories. It:

1. Fetches repos from `https://api.github.com/users/davebenedict/repos`
2. Filters out forks and private repos
3. Sorts by star count
4. Displays:
   - Repository name
   - Description
   - Programming language
   - Star and fork counts
   - Topics/tags
   - Live demo link (if homepage is set)

**No configuration needed!** Just push your code to GitHub and it will appear automatically.

### Static Portfolio (Manual)

To add projects manually, edit `src/app/personal/portfolio/page.tsx`:

```typescript
const projects = [
  {
    id: 1,
    name: 'My Awesome Project',
    description: 'A cool project I built',
    url: 'https://github.com/davebenedict/my-project',
    language: 'TypeScript',
    stars: 10,
    topics: ['react', 'nextjs', 'tailwind'],
  },
  // Add more projects here
];
```

## Increase GitHub API Rate Limits (Optional)

By default, GitHub API allows 60 requests/hour. To increase to 5,000/hour:

1. **Create GitHub Personal Access Token:**
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name: "Portfolio API"
   - Select scopes: `public_repo` (read-only)
   - Click "Generate token"
   - Copy the token

2. **Add to Vercel Environment Variables:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `GITHUB_TOKEN` = `your_token_here`
   - Click "Save"
   - Redeploy your site

3. **Uncomment the line in the API route:**
   
   In `src/app/api/github/repos/route.ts`, uncomment:
   ```typescript
   'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
   ```

## Customization

### Change Which Repos Are Shown

Edit `src/app/api/github/repos/route.ts`:

```typescript
const formattedRepos = repos
  .filter((repo: any) => 
    !repo.fork && // Remove this to show forks
    !repo.private && // Private repos won't show anyway
    repo.stargazers_count > 0 // Only show repos with stars
  )
```

### Change Sort Order

```typescript
.sort((a: any, b: any) => 
  new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
) // Sort by most recently updated
```

### Limit Number of Repos

```typescript
.slice(0, 12) // Show only first 12 repos
```

## Update Navigation

The Portfolio link has been added to the homepage navigation. To change which portfolio version is linked:

Edit `src/app/personal/page.tsx`:

```typescript
// For dynamic (current):
<Link href="/personal/portfolio-dynamic">Portfolio</Link>

// For static:
<Link href="/personal/portfolio">Portfolio</Link>
```

## Features

### Dynamic Portfolio Includes:
- ✅ Real-time GitHub data
- ✅ Automatic updates (1-hour cache)
- ✅ Loading states
- ✅ Error handling
- ✅ Star and fork counts
- ✅ Repository topics/tags
- ✅ Live demo links
- ✅ Responsive design
- ✅ Dark mode support

### Static Portfolio Includes:
- ✅ Full control over content
- ✅ Custom descriptions
- ✅ Manual curation
- ✅ No API dependencies
- ✅ Faster loading

## Testing

After deployment (in ~1 minute), visit:
- Dynamic: https://www.dbenedict.com/personal/portfolio-dynamic
- Static: https://www.dbenedict.com/personal/portfolio

## Troubleshooting

### "No public repositories found"
- Check that your GitHub repos are public
- Verify username is correct in API route
- Check GitHub API rate limits

### API Rate Limit Exceeded
- Add GitHub token (see above)
- Or wait 1 hour for rate limit to reset

### Repos Not Updating
- Cache is set to 1 hour
- Force refresh in Vercel or wait for cache to expire
- Or change `revalidate` value in API route

## Next Steps

1. **Add more GitHub repos** - They'll automatically appear!
2. **Set homepage URLs** on your GitHub repos to show "Live Demo" links
3. **Add topics/tags** to your GitHub repos for better categorization
4. **Star your best repos** to feature them at the top

## Files Created

- `src/app/personal/portfolio/page.tsx` - Static portfolio
- `src/app/personal/portfolio-dynamic/page.tsx` - Dynamic portfolio
- `src/app/api/github/repos/route.ts` - GitHub API integration
- `src/app/personal/page.tsx` - Updated with Portfolio link

Enjoy your new portfolio! 🎉
