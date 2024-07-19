import { Injectable, NotFoundException, Param } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2019 },
    { id: 2, make: 'Toyota', model: 'Camry', year: 2019 },
    { id: 3, make: 'Toyota', model: 'Prius', year: 2019 },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }
}
