import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/product.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/product_management'), // Update MongoDB URI
    AuthModule,
    ProductsModule,
    UsersModule,
  ],
})
export class AppModule {}
