FROM node:26-alpine AS base
RUN npm install -g pnpm@11.25.0
WORKDIR /app

FROM base AS builder
COPY . .
RUN mkdir -p apps/pro/public
RUN pnpm install --frozen-lockfile && pnpm --filter=@circlecross/pro build

FROM node:26-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
COPY --from=builder /app/apps/pro/.next/standalone ./
COPY --from=builder /app/apps/pro/.next/static ./apps/pro/.next/static
COPY --from=builder /app/apps/pro/public ./apps/pro/public
CMD ["node", "apps/pro/server.js"]
