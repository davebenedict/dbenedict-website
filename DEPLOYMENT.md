# Deployment Guide for dbenedict.com

## Prerequisites

1. **GitHub Account** - dave.d.benedict@gmail.com (configured)
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) using your GitHub account
3. **GoDaddy Domain** - dbenedict.com (already owned)

## Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `dbenedict-website`
   - Description: "Personal and business website with subdomain routing"
   - Keep it Private or Public (your choice)
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. Push your local code to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/dbenedict-website.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" and choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Select your `dbenedict-website` repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)
   - Leave all defaults and click "Deploy"

4. **Wait for Deployment**
   - First deployment takes 1-2 minutes
   - You'll get a URL like: `dbenedict-website.vercel.app`
   - Test this URL to make sure everything works

## Step 3: Configure Custom Domains in Vercel

1. **Add www.dbenedict.com**
   - In your Vercel project, go to "Settings" → "Domains"
   - Enter: `www.dbenedict.com`
   - Click "Add"
   - Vercel will show you DNS configuration instructions

2. **Add biz.dbenedict.com**
   - Still in "Settings" → "Domains"
   - Enter: `biz.dbenedict.com`
   - Click "Add"
   - Vercel will show you DNS configuration instructions

3. **Optional: Add apex domain**
   - Enter: `dbenedict.com`
   - Click "Add"
   - This will redirect to www.dbenedict.com

## Step 4: Configure DNS on GoDaddy

1. **Login to GoDaddy**
   - Go to https://dcc.godaddy.com/domains
   - Find `dbenedict.com` and click "DNS"

2. **Add CNAME Records**
   
   For **www subdomain**:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `600 seconds` (or default)
   
   For **biz subdomain**:
   - Type: `CNAME`
   - Name: `biz`
   - Value: `cname.vercel-dns.com`
   - TTL: `600 seconds` (or default)

3. **For Apex Domain (optional)**
   
   Add these A records:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   - TTL: `600 seconds`
   
   Add another A record:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.22`
   - TTL: `600 seconds`

4. **Save Changes**
   - Click "Save" on GoDaddy
   - DNS propagation can take 5-30 minutes (sometimes up to 48 hours)

## Step 5: Verify SSL Certificates

1. **Check Vercel Dashboard**
   - Go back to Vercel → Settings → Domains
   - Wait for SSL certificates to be issued (usually automatic within minutes)
   - Status should show "Valid Configuration" with a green checkmark

2. **Test Your Domains**
   - https://www.dbenedict.com (personal site)
   - https://biz.dbenedict.com (business site)
   - Both should load with HTTPS (secure)

## Step 6: Configure Automatic Deployments

Vercel automatically deploys when you push to GitHub:

1. **Production Deployments**
   - Push to `main` branch → deploys to production
   - Your custom domains will update automatically

2. **Preview Deployments**
   - Push to any other branch → creates preview URL
   - Perfect for testing before merging to main

## Environment Variables (For Future Use)

When you add Sanity CMS, Stripe, or other services:

1. Go to Vercel → Settings → Environment Variables
2. Add variables like:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `STRIPE_SECRET_KEY`
   - etc.
3. Redeploy for changes to take effect

## Troubleshooting

### DNS Not Working
- Wait 30 minutes for propagation
- Use https://dnschecker.org to check DNS status
- Verify CNAME records are exactly: `cname.vercel-dns.com`

### SSL Certificate Issues
- Vercel auto-provisions SSL (Let's Encrypt)
- If stuck, remove and re-add the domain in Vercel
- Ensure DNS is properly configured first

### Subdomain Routing Not Working
- Check `src/middleware.ts` is present
- Verify both domains are added in Vercel
- Test with `curl -H "Host: biz.dbenedict.com" https://dbenedict-website.vercel.app`

## Next Steps After Deployment

1. **Set up Sanity CMS** for blog content
2. **Add Stripe** for e-commerce functionality
3. **Implement booking system** with calendar integration
4. **Add authentication** for user accounts
5. **Set up analytics** (Vercel Analytics or Google Analytics)
6. **Configure email** for contact forms

## Useful Commands

```bash
# Deploy from CLI
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Pull environment variables
vercel env pull
```

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GoDaddy DNS Help: https://www.godaddy.com/help/manage-dns-records-680
