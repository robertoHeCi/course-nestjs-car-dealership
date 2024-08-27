import { v4 as uuidv4 } from 'uuid';
import { Car } from '../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  { id: uuidv4(), brand: 'Toyota', model: 'Corolla', year: 2019 },
  { id: uuidv4(), brand: 'Honda', model: 'Civic', year: 2020 },
  { id: uuidv4(), brand: 'Ford', model: 'Fiesta', year: 2018 },
  { id: uuidv4(), brand: 'Chevrolet', model: 'Camaro', year: 2021 },
  { id: uuidv4(), brand: 'Nissan', model: 'Sentra', year: 2017 },
];
