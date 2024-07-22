import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dtos/create-cart.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuidv4(), brand: 'Toyota', model: 'Corolla', year: 2019 },
    { id: uuidv4(), brand: 'Toyota', model: 'Camry', year: 2019 },
    { id: uuidv4(), brand: 'Toyota', model: 'Prius', year: 2019 },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = { id: uuidv4(), ...createCarDto };
    this.cars.push(newCar);
    return newCar;
  }
}
