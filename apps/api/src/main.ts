import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { loadRootEnvironment } from "./bootstrap/load-root-environment.js";

async function bootstrap() {
  const logger = new Logger(bootstrap.name);

  loadRootEnvironment();
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT ?? process.env.API_PORT ?? 8005);
  const host = process.env.HOST ?? "::";
  await app.listen(port, host);

  logger.log(`API is running on ${host}:${port}`);
}
await bootstrap();
