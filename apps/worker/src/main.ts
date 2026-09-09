import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

async function bootstrap() {
  const logger = new Logger(bootstrap.name);
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT ?? 8006);
  const host = process.env.HOST ?? "::";
  await app.listen(port, host);
  logger.log(`Worker is running on ${host}:${port}`);
}
await bootstrap();
