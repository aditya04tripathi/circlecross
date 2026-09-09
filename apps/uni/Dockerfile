FROM node:26-alpine AS base
RUN npm install -g pnpm@11.25.0
WORKDIR /app

FROM base AS builder
COPY . .
RUN pnpm install --frozen-lockfile && pnpm --filter=@circlecross/uni build

FROM node:26-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
COPY --from=builder /app/apps/uni/.next/standalone ./
COPY --from=builder /app/apps/uni/.next/static ./apps/uni/.next/static
COPY --from=builder /app/apps/uni/public ./apps/uni/public
CMD ["node", "apps/uni/server.js"]
