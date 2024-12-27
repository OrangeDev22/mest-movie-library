import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// let allowCrossDomain = function (_req: any, res: any, next: any) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'x-api-key,authorization,Cache-Control,content-type',
//   );

//   next();
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.use(allowCrossDomain);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(8000);
}
bootstrap();
