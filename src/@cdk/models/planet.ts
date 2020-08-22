import {Film} from './film';
import {Person} from './person';

export class Planet {
  name: string;
  rotationPeriod: number;
  orbitalPeriod: number;
  diameter: number;
  climate: string;
  terrain: string;
  gravity: string;
  surfaceWater: number;
  films: Film[];
  created: Date;
  url: string;
  residents: Person[];


  constructor(name: string, rotationPeriod: number, orbitalPeriod: number, diameter: number, climate: string, terrain: string, gravity: string, surfaceWater: number, films: Film[], created: Date, url: string, residents: Person[]) {
    this.name = name;
    this.rotationPeriod = rotationPeriod;
    this.orbitalPeriod = orbitalPeriod;
    this.diameter = diameter;
    this.climate = climate;
    this.terrain = terrain;
    this.gravity = gravity;
    this.surfaceWater = surfaceWater;
    this.films = films;
    this.created = created;
    this.url = url;
    this.residents = residents;
  }
}
