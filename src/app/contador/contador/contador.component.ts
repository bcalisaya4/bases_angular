import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  styleUrls: ['../../app.component.css'],


  template: `
  <h1> {{ title }}</h1>
  <h3> La base es: <strong>{{ variable }}</strong> </h3>
  <button (click)="acumular(variable)" > +{{ variable }} </button>
  <span> {{ numero }}</span>
  <button (click)="acumular(-variable)" > -{{ variable }} </button>
  `
})
export class ContadorComponent {
  title = 'bases';
  numero: number = 10;
  variable: number = 5;


  acumular(valor: number) {
    this.numero += valor;
  }


}
