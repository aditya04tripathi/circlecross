FROM node:26-alpine
WORKDIR /app
RUN npm install -g pnpm@11.25.0
COPY . .
RUN pnpm install --frozen-lockfile && pnpm --filter worker build
CMD ["pnpm", "--filter", "worker", "start:prod"]
