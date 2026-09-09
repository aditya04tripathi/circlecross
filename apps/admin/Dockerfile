FROM node:26-alpine
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile && pnpm --filter admin build
CMD ["pnpm", "--filter", "admin", "start"]
