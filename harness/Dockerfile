# Benchmark harness image. Points at a running app (WEB_URL/API_URL) and writes results to /results.
#   docker build -f harness/Dockerfile -t mkt-bench .
#   docker run --rm --network host -e PLATFORM=native -e REGION_LABEL=us-east-1 -v $PWD/results:/app/results --env-file .env mkt-bench
FROM mcr.microsoft.com/playwright:v1.63.0-noble
WORKDIR /app
COPY package.json package-lock.json ./
COPY packages/shared/package.json packages/shared/
COPY harness/package.json harness/
RUN npm install --workspace harness --workspace packages/shared --include-workspace-root=false --ignore-scripts
COPY packages/shared packages/shared
COPY harness harness
ENV WEB_URL=http://localhost:5173 API_URL=http://localhost:4000 REGION_LABEL=unlabelled
WORKDIR /app/harness
ENTRYPOINT ["npx", "tsx", "bench/run.ts"]
