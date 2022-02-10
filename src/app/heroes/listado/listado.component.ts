import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent
//implements OnInit
{


  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];
  heroeBorrado: string = ''
  borrarHeroe() {
    console.log('borrar...');
    this.heroeBorrado = this.heroes.shift() || '';
  }


  /*constructor() { }
  // se ejecuta para despues del constructor
  // este sirve para inicializar cosas
  ngOnInit(): void {
  }*/

}
