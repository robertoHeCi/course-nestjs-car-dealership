import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-cart.dto';
import { UpdateCartDto } from './dtos/update-cart.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return { car: this.carsService.findOneById(id) };
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return this.carsService.update(id, updateCartDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.delete(id);
  }
}
