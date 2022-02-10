import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./../../app.component.css'],
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: "Maestro Roshi",
    poder: 1000
  }
  /*get Personajes():Personaje[]{
    return  this.dbzService.Personajes;
  }
  agregarNuevoPersonaje(argumento: Personaje) {
    //console.log(argumento)
    this.Personajes.push(argumento);
  }
  constructor(private dbzService: DbzService) {
  }*/

}
