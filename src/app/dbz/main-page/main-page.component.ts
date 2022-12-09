import { Component,Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  /* personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 100000
    },
    {
      nombre: 'Vegeta',
      poder: 40000
    }
  ]; */

  nuevo: Personaje = {
    nombre: 'Songohanda',
    poder: 35000
  }

  /* agregarNewPersonaje(personaje: Personaje) {
    console.log(personaje);
    this.personajes.push(personaje);
  } */

}
