FROM node:26-alpine AS base
RUN npm install -g pnpm@11.25.0
WORKDIR /app

FROM base AS builder
ARG SITE_URL=http://localhost:8004
ENV SITE_URL=$SITE_URL
COPY . .
RUN pnpm install --frozen-lockfile && pnpm --filter=@circlecross/docs build

FROM node:26-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ARG SITE_URL=http://localhost:8004
ENV SITE_URL=$SITE_URL
COPY --from=builder /app/apps/docs/.next/standalone ./
COPY --from=builder /app/apps/docs/.next/static ./apps/docs/.next/static
COPY --from=builder /app/apps/docs/public ./apps/docs/public
CMD ["node", "apps/docs/server.js"]
