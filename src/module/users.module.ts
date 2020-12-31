import { Module } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User, UserSchema } from '../schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class UsersModule {}
