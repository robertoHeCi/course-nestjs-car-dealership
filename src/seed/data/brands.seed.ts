import { v4 as uuidv4 } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  { id: uuidv4(), name: 'Toyota', createdAt: Date.now() },
  { id: uuidv4(), name: 'Honda', createdAt: Date.now() },
  { id: uuidv4(), name: 'Ford', createdAt: Date.now() },
  { id: uuidv4(), name: 'Chevrolet', createdAt: Date.now() },
  { id: uuidv4(), name: 'Nissan', createdAt: Date.now() },
];
