import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/graneet'), CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
