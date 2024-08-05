import {
  Injectable,
  NotFoundException,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto, UpdateCartDto } from './dtos';

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

  update(id: string, updateCarDto: UpdateCartDto) {
    this.findOneById(id);
    this.cars = this.cars.map((car) =>
      car.id === id ? { ...car, ...updateCarDto, id } : car,
    );
    return this.findOneById(id);
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
