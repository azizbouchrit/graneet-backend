import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:root@cluster0.vl6v6.mongodb.net/graneet?retryWrites=true&w=majority'), CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
