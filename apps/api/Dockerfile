FROM node:26-alpine
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile && pnpm --filter api build
CMD ["pnpm", "--filter", "api", "start:prod"]
