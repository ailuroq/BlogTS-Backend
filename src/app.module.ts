import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './module/users.module';
import { RegController } from './controllers/reg.controller';
import { AppController } from './controllers/app.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://yaroslav:Kutuzov@cluster0.prnug.mongodb.net/Blog?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController, RegController],
  providers: [AppService],
})
export class AppModule {}
