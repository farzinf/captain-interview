import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { PaymentModule } from './payments/payment.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
    ),
    UserModule,
    AuthModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
