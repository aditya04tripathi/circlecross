import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

async function bootstrap() {
  const logger = new Logger(bootstrap.name);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 8006);
  logger.log(`Worker is running on port ${process.env.PORT ?? 8006}`);
}
await bootstrap();
