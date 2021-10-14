import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City, CityDocument } from './schemas/city.schema';
import { CreateCityDto } from './dto/create-city.dto';
// import * as myFile from "./test.json";

@Injectable()
export class CityService {
  constructor(
    @InjectModel(City.name) private readonly model: Model<CityDocument>,
  ) {}

  async findCitiedBy(keyword: string): Promise<City[]> {
    let cityNameRegex = new RegExp('.*' + keyword + '.*', 'i');
    let zipRegex = new RegExp('^' + keyword + '.*');
    console.log(cityNameRegex + ' ' + zipRegex);

    return await this.model
      .find({ $or: [{ nomCommune: cityNameRegex }, { codePostal: zipRegex }] })
      .limit(100)
      .sort({ nomCommune: 1 })
      .exec();
    // return await this.model.find({attr: value}).exec();
  }

  async findAllCities(): Promise<City[]> {
    // console.log(myFile[0]);

    return await this.model.find().exec();
  }

  async create(createCityDto: CreateCityDto): Promise<City> {
    return await new this.model({
      ...createCityDto,
    }).save();
  }
}
