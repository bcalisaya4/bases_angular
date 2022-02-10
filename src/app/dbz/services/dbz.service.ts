import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {


  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 8001
    },
    {
      nombre: 'Vegeta',
      poder: 6000
    },
    {
      nombre: 'Cell',
      poder: 60000
    }
  ];
  get personajes(): Personaje[] {
    return [...this._personajes]
  }

  contructor() {
  }
  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje)
  }
}
