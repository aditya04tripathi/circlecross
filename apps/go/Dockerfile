FROM node:26-alpine
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile && pnpm --filter go build
CMD ["pnpm", "--filter", "go", "start"]
