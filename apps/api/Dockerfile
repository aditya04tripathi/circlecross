FROM node:26-alpine
WORKDIR /app
RUN npm install -g pnpm@11.25.0
COPY . .
RUN pnpm install --frozen-lockfile && pnpm --filter api build
CMD ["pnpm", "--filter", "api", "start:prod"]
