# Contact Form Setup Guide

## Current Status

✅ **Contact form is now functional!**

The form currently:
- Validates all fields
- Shows loading state while submitting
- Displays success/error messages
- Logs submissions to Vercel logs
- **Does NOT send emails yet** (see setup below)

## Where Messages Go

Right now, form submissions are logged to the Vercel console. You can view them:

1. Go to Vercel Dashboard → Your Project
2. Click "Logs" tab
3. Look for "Contact form submission" entries

## Setting Up Email Delivery

To actually receive emails, choose one of these options:

### Option 1: Resend (Recommended - Easiest)

**Why Resend?**
- Free tier: 3,000 emails/month
- Simple API
- Great for transactional emails
- No credit card required for free tier

**Setup Steps:**

1. **Sign up at https://resend.com**

2. **Get API Key:**
   - Go to API Keys
   - Create new key
   - Copy the key

3. **Install Resend:**
   ```bash
   npm install resend
   ```

4. **Add to Vercel Environment Variables:**
   - Vercel Dashboard → Settings → Environment Variables
   - Add: `RESEND_API_KEY` = `your_api_key`
   - Add: `CONTACT_EMAIL` = `dave.d.benedict@gmail.com`

5. **Update API Route:**

   Replace the content in `src/app/api/contact/route.ts` with:

   ```typescript
   import { NextResponse } from 'next/server';
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request: Request) {
     try {
       const body = await request.json();
       const { name, email, subject, message } = body;

       if (!name || !email || !subject || !message) {
         return NextResponse.json(
           { error: 'All fields are required' },
           { status: 400 }
         );
       }

       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(email)) {
         return NextResponse.json(
           { error: 'Invalid email address' },
           { status: 400 }
         );
       }

       // Send email via Resend
       await resend.emails.send({
         from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain
         to: process.env.CONTACT_EMAIL || 'dave.d.benedict@gmail.com',
         replyTo: email,
         subject: `Contact Form: ${subject}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>From:</strong> ${name} (${email})</p>
           <p><strong>Subject:</strong> ${subject}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>
         `,
       });

       return NextResponse.json({
         success: true,
         message: 'Message sent successfully!',
       });
     } catch (error) {
       console.error('Contact form error:', error);
       return NextResponse.json(
         { error: 'Failed to send message. Please try again.' },
         { status: 500 }
       );
     }
   }
   ```

6. **Verify Domain (Optional but Recommended):**
   - In Resend dashboard, add your domain `dbenedict.com`
   - Add DNS records they provide
   - Change `from` email to `contact@dbenedict.com`

### Option 2: SendGrid

**Setup:**

1. Sign up at https://sendgrid.com (Free: 100 emails/day)
2. Get API key
3. Install: `npm install @sendgrid/mail`
4. Add `SENDGRID_API_KEY` to Vercel env vars
5. Update API route similar to Resend example

### Option 3: Nodemailer (Use Your Gmail)

**Setup:**

1. Install: `npm install nodemailer`
2. Enable "App Passwords" in Gmail settings
3. Add to Vercel env vars:
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_USER=dave.d.benedict@gmail.com`
   - `SMTP_PASSWORD=your_app_password`

4. Update API route:

   ```typescript
   import nodemailer from 'nodemailer';

   const transporter = nodemailer.createTransporter({
     host: process.env.SMTP_HOST,
     port: parseInt(process.env.SMTP_PORT || '587'),
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASSWORD,
     },
   });

   // In POST function:
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: process.env.SMTP_USER,
     replyTo: email,
     subject: `Contact Form: ${subject}`,
     html: `...`,
   });
   ```

## Testing

After setting up email:

1. Visit https://www.dbenedict.com/personal/contact
2. Fill out the form
3. Click "Send Message"
4. Check your email!

## Current Form Features

✅ **Client-side validation**
✅ **Loading states**
✅ **Success/error messages**
✅ **Form reset after success**
✅ **Disabled button while sending**
✅ **Email format validation**
✅ **Required field validation**

## Troubleshooting

### Form submits but no email
- Check Vercel logs for errors
- Verify API key is set correctly
- Check email service dashboard

### "Failed to send message" error
- Check Vercel logs for specific error
- Verify all environment variables are set
- Make sure you redeployed after adding env vars

### Emails going to spam
- Verify your domain with email service
- Use a custom domain email (not onboarding@resend.dev)
- Add SPF/DKIM records to DNS

## Recommended: Resend Setup

For the quickest setup, I recommend Resend:

```bash
cd e:\dbenedict\dbenedict-website
npm install resend
```

Then follow Option 1 above. Takes about 5 minutes!

## Files Modified

- `src/app/api/contact/route.ts` - API endpoint (currently logs only)
- `src/app/personal/contact/page.tsx` - Form with submission handling

## Next Steps

1. Choose an email service (Resend recommended)
2. Sign up and get API key
3. Add environment variables to Vercel
4. Update API route with email sending code
5. Test the form!

Your contact form is ready to receive submissions - just needs email delivery configured! 📧
