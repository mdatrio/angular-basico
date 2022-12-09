import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {}

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNewPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}