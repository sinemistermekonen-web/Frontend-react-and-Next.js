# Addis Eats — Server and Client Boundaries

| File / component | Boundary | Reason |
|---|---|---|
| `app/layout.js` | Server | Shared HTML shell, metadata, and navigation. It mounts the client provider. |
| `app/page.js` | Server | Renders static landing content and featured dishes. |
| `app/menu/page.js` | Server | Selects available dishes from trusted local data. |
| `components/DishList.jsx` | Client | Category filtering uses React state. |
| `components/DishCard.jsx` | Server | Displays dish information and links. |
| `components/AddToCartButton.jsx` | Client | Button click updates cart context. |
| `components/Providers.jsx` | Client | Owns cart state and browser `localStorage` persistence. |
| `app/menu/[id]/page.js` | Server | Resolves route params, metadata, static params, and 404 behavior. |
| `app/cart/page.js` | Client | Reads and changes the browser's cart. |
| `app/checkout/page.js` | Client UI + Server Action | Uses cart context and submits a form to server-side validation. |
| `app/actions.js` | Server Action | Validates submitted form data through `lib/orders.js`. |
| `lib/dishes.js`, `lib/orders.js`, `lib/validation.js` | Server-safe shared modules | Contain catalogue, trusted price calculation, and input validation. |
| `app/api/**/route.js` | Server | Handles HTTP requests without exposing server logic to the browser. |
| `app/not-found.js`, `app/menu/not-found.js` | Server | Render route-level not-found experiences. |
| `app/menu/error.js` | Client | Error boundaries require a Client Component and a reset callback. |

## Boundary rule

Keep components on the server by default. Add `"use client"` only for browser state, event handlers, effects, context, or interactive controls. Never trust prices or item names sent by the browser; look up dish records on the server before calculating totals.
