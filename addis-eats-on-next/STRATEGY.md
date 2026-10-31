# Addis Eats — Rendering Strategy

| Route | Rendering / execution strategy | Reason |
|---|---|---|
| `/` | Static Server Component | Landing content and featured dishes come from local, build-time data. |
| `/menu` | Static Server Component + small Client Component | Dish data is local; category filtering needs browser state. |
| `/menu/[id]` | Static generation with `generateStaticParams`; dynamic params use `notFound()` | Known dishes are generated at build time and unknown IDs return a 404. |
| `/cart` | Client Component | Cart interactions and browser `localStorage` persistence are user-specific. |
| `/checkout` | Client form + Server Action | The form reads cart state in the browser; the server independently validates submitted details and item IDs. |
| `/api/dishes` | GET Route Handler | Exposes the current dish catalogue as JSON. |
| `/api/dishes/[id]` | Dynamic GET Route Handler | Returns one dish, or an appropriate 400/404 response. |
| `/api/orders` | POST Route Handler | Validates JSON input and recalculates prices from trusted server-side dish data. |

## Verification

- `npm run build` should complete successfully and list the routes above.
- `GET /api/dishes` should return `{ "dishes": [...] }`.
- Unknown `/menu/<id>` values should render the menu-specific not-found UI and return HTTP 404.
- Invalid `POST /api/orders` input should return HTTP 422; malformed JSON returns HTTP 400.
- Valid orders are validated only. This coursework demo does not process payment, dispatch delivery, or persist orders.
- Run `npm start`, then use `curl.exe -i http://localhost:3000/`, `/menu`, `/cart`, `/checkout`, `/menu/999`, and `/api/dishes`.
