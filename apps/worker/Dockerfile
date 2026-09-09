FROM node:26-alpine
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile && pnpm --filter worker build
CMD ["pnpm", "--filter", "worker", "start:prod"]
