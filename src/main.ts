import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001, "0.0.0.1", () => {
    console.log(`Server running at http://0.0.0.1:${3001}/`);
  });
}
bootstrap();
