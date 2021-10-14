import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';

@Controller('cities')
export class CityController {
  constructor(private readonly service: CityService) {}

  @Get(':keyword')
  async findCitiedBy(@Param('keyword') keyword: string) {
    const cities = await this.service.findCitiedBy(keyword);

    let metropolianCities = [];
    let otherCities = [];

    cities.map((city) => {
      if (/98.../.test(city.codePostal) || /97.../.test(city.codePostal))
        otherCities.push(city);
      else metropolianCities.push(city);
    });
    return { metropolianCities, otherCities };
  }

  @Get()
  async findAllCities() {
    return await this.service.findAllCities();
  }

  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    return await this.service.create(createCityDto);
  }
}
