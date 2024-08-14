import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuidv4(),
      name: 'Audi',
      createdAt: Date.now(),
    },
    {
      id: uuidv4(),
      name: 'BMW',
      createdAt: Date.now(),
    },
    {
      id: uuidv4(),
      name: 'Mercedes',
      createdAt: Date.now(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const newBrand = {
      id: uuidv4(),
      name: name.toLocaleLowerCase(),
      createdAt: Date.now(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    this.findOne(id);
    let brandFound = this.findOne(id);
    if (brandFound.id === id) {
      brandFound = { ...brandFound, updatedAt: Date.now(), ...updateBrandDto };
    }
    return this.brands.map((brand) => (brand.id === id ? brandFound : brand));
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
}
