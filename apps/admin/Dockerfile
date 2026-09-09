FROM node:26-alpine AS base
RUN npm install -g pnpm@11.25.0
WORKDIR /app

FROM base AS builder
COPY . .
RUN mkdir -p apps/admin/public
RUN pnpm install --frozen-lockfile && pnpm --filter=@circlecross/admin build

FROM node:26-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
COPY --from=builder /app/apps/admin/.next/standalone ./
COPY --from=builder /app/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=builder /app/apps/admin/public ./apps/admin/public
CMD ["node", "apps/admin/server.js"]
