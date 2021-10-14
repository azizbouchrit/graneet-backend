import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop({ required: true })
  codePostal: string;

  @Prop({ required: true })
  codeCommune: string;

  @Prop({ required: true })
  libelleAcheminement: string;

  @Prop({ required: true })
  codeVoie: string;

  @Prop({ required: true })
  nomCommune: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
