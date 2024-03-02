import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { UserModule } from "./user/user.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Demo")
    .setDescription("这是一个案例")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [UserModule],
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });
  SwaggerModule.setup("api", app, document);

  app.enableCors();
  await app.listen(3000, "0.0.0.0");
}
bootstrap();
