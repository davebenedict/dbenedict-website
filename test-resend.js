// Quick test script for Resend API
// Run with: node test-resend.js

const apiKey = process.env.RESEND_API_KEY || 'YOUR_API_KEY_HERE';

console.log('Testing Resend API...');
console.log('API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT SET');

if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
  console.error('❌ RESEND_API_KEY not set!');
  console.log('\nTo test:');
  console.log('1. Get your API key from https://resend.com/api-keys');
  console.log('2. Run: $env:RESEND_API_KEY="re_your_key"; node test-resend.js');
  process.exit(1);
}

// Test the API
fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: 'Contact Form <onboarding@resend.dev>',
    to: 'dave@dbenedict.com',
    subject: 'Test Email from dbenedict.com',
    html: '<h1>Test Email</h1><p>If you receive this, Resend is working!</p>',
  }),
})
  .then(res => res.json())
  .then(data => {
    if (data.id) {
      console.log('✅ Success! Email sent.');
      console.log('Email ID:', data.id);
      console.log('\nCheck dave@dbenedict.com for the test email.');
    } else {
      console.error('❌ Error:', data);
    }
  })
  .catch(err => {
    console.error('❌ Network error:', err.message);
  });
