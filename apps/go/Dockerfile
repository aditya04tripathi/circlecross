FROM node:26-alpine AS base
RUN npm install -g pnpm@11.25.0
WORKDIR /app

FROM base AS builder
COPY . .
RUN mkdir -p apps/go/public
RUN pnpm install --frozen-lockfile && pnpm --filter=@circlecross/go build

FROM node:26-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
COPY --from=builder /app/apps/go/.next/standalone ./
COPY --from=builder /app/apps/go/.next/static ./apps/go/.next/static
COPY --from=builder /app/apps/go/public ./apps/go/public
CMD ["node", "apps/go/server.js"]
