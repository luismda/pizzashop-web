# Pizza Shop Web 🍕

This project is a dashboard for managing a restaurant, including metrics visualization and order control, 
with unit and e2e tests. 🔥

It is possible to create an account and access a panel with graphs and metrics about the restaurant, in 
addition to viewing all orders, as well as applying filters and updating the status of each order.

Some technologies used:

- React.js + Vite
- TypeScript
- TailwindCSS
- Shadcn/ui
- React Query
- React Hook Form
- Zod
- Vitest
- Mock Service Worker
- Playwright

## Running

To run this project without MSW mocks it is necessary to create a `.env` file, following `.env.example`, 
and add the API url. The API for this project can be found in [this repository](https://github.com/rocketseat-education/pizzashop-api).

```sh

# Clone this repository
git clone https://github.com/luismda/pizzashop-web.git

# Install the dependencies
pnpm i

# Start project 🔥
pnpm run dev

# Start project in test mode (MSW mocks)
pnpm run dev:test

# Run unit tests
pnpm run test

```