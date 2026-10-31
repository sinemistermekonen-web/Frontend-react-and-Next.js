# Addis Eats — Next.js

A small Ethiopian food-ordering coursework project built with the Next.js App Router.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally (Windows PowerShell or another terminal)

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production verification

```bash
npm run lint
npm run build
npm start
```

Then check the routes:

```powershell
curl.exe -i http://localhost:3000/
curl.exe -i http://localhost:3000/menu
curl.exe -i http://localhost:3000/menu/1
curl.exe -i http://localhost:3000/menu/999
curl.exe -i http://localhost:3000/api/dishes
curl.exe -i http://localhost:3000/api/dishes/1
```

The cart is stored in the browser's local storage. Checkout and the orders API validate the customer and cart using trusted server-side dish prices. This is a learning demo only: it does not take payment, dispatch deliveries, or permanently save orders.

See [STRATEGY.md](./STRATEGY.md) for route rendering decisions and [BOUNDARY.md](./BOUNDARY.md) for Server/Client component boundaries.
