import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { loadRootEnvironment } from "./bootstrap/load-root-environment.js";

async function bootstrap() {
  const logger = new Logger(bootstrap.name);

  loadRootEnvironment();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT ?? 8005);

  logger.log(`API is running on port ${process.env.API_PORT ?? 8005}`);
}
await bootstrap();
