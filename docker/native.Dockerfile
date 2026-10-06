FROM node:24-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY packages/shared/package.json packages/shared/
COPY packages/native-server/package.json packages/native-server/
RUN npm ci --workspace packages/native-server --include-workspace-root=false --ignore-scripts || npm install --workspace packages/native-server
COPY packages/shared packages/shared
COPY packages/native-server packages/native-server
WORKDIR /app/packages/native-server
CMD ["npx", "tsx", "src/index.ts"]
