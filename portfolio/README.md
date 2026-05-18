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

The contact form now sends these variables:

- `{{name}}`
- `{{from_name}}`
- `{{email}}`
- `{{from_email}}`
- `{{message}}`
- `{{time}}`
- `{{to_email}}`
- `{{reply_to}}`

You can use this HTML template body in EmailJS:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>
    A message by {{name}} has been received. Kindly respond at your earliest
    convenience.
  </div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <div style="color: #4b5563; font-size: 13px; margin-top: 4px">
            {{from_email}}
          </div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```
