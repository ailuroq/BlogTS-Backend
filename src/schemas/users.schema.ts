import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  email: number;

  @Prop()
  password: string;

  @Prop([String])
  posts: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
