FROM node:26-alpine
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile && pnpm --filter pro build
CMD ["pnpm", "--filter", "pro", "start"]
