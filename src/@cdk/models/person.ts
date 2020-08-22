import {Specie} from './specie';
import {Vehicle} from './vehicle';

export class Person {
  name: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  species: Specie[];
  vehicles: Vehicle[];


  constructor(name: string, hairColor: string, skinColor: string, eyeColor: string, birthYear: string, gender: string, species: Specie[], vehicles: Vehicle[]) {
    this.name = name;
    this.hairColor = hairColor;
    this.skinColor = skinColor;
    this.eyeColor = eyeColor;
    this.birthYear = birthYear;
    this.gender = gender;
    this.species = species;
    this.vehicles = vehicles;
  }
}
