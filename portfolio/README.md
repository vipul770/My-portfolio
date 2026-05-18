# Portfolio

This portfolio now includes a working contact form flow using `EmailJS`.

## How messages reach you

When a visitor fills the form and clicks `Send Message`, the frontend sends the form data through EmailJS. EmailJS then forwards that message to your email inbox.

## Setup

1. Create an account at `https://www.emailjs.com/`.
2. Add an email service in EmailJS.
3. Create an email template in EmailJS.
4. Copy `.env.example` to `.env`.
5. Fill these values in `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_CONTACT_RECEIVER_EMAIL=vipul70067007@gmail.com
```

## Recommended EmailJS template variables

Use these variables inside your EmailJS template:

- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`
- `{{to_email}}`
- `{{reply_to}}`

Example template body:

```text
You have a new portfolio message.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```
