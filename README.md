# JEE OS

Static storefront for the `JEE Execution OS` product bundle.

## What is included

- A public landing page at `index.html`
- A public config file at `config.js` for your checkout URL and support email
- Product assets under `products/`

## Launch steps

1. Open `config.js`
2. Replace `supportEmail` with your public support email
3. Replace `checkoutUrl` with your public payment or checkout link
4. Deploy to Vercel

## Important

Do not put private bank account numbers, card details, UPI PINs, or other secrets in this repo.

Use a payment provider's hosted checkout page and paste only the public purchase link into `config.js`.
