import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './schemas/city.schema';

@Module({
  providers: [CityService],
  controllers: [CityController],
  imports: [
    MongooseModule.forFeature([{name: City.name, schema: CitySchema}])
  ]
})
export class CityModule {}
