import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  id?: string; // Optional field to match payload requirements
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
