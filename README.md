## Introduction

- A novice attempt in trying to build a e-commerce project while learning to implements some technologies like Stripe for payment, Auth0 for authorization and Airtable for products management.

- Gadget Junkie: https://react-vite-gadget-junkie.netlify.app

#### .env VARS (for Auth0 and Stripe)

- VITE_AUTH_DOMAIN=
- VITE_CLIENT_ID=
- VITE_STRIPE_PUBLIC_KEY=
- VITE_STRIPE_SECRET_KEY=

#### Fonts

- Fontshare
- [fontshare pairs](https://www.fontshare.com/pairs)

#### Favicon

- [favicon.io](https://favicon.io/)

#### Main Images

- [undraw](https://undraw.co/illustrations)

#### Pick Product Photos

- at least 4 product images
- at least 4 secondary images

#### Create Airtable Account

- setup base and table
- add products

#### API KEYS

- Navigate to Docs
- Get API_KEY and Base ID and Table Name
- add all to .env

```js
AIRTABLE_API_KEY=
AIRTABLE_BASE=
AIRTABLE_TABLE=
```

#### Serverless Functions

```js
exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: "products route",
  };
};
```

- [Products](http://localhost:8888/.netlify/functions/products)
- [Single Product](http://localhost:8888/.netlify/functions/single-product)

#### Install Airtable-Node

```sh
npm i airtable-node

```
