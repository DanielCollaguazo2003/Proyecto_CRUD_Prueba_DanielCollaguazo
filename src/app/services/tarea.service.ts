import { Injectable } from '@angular/core';
import { Tarea } from '../domains/Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  listaTarea: Tarea[] = []; //-> Arreglo de objetos Tarea
  tarea?: Tarea;

  constructor() {

  }

  addTarea(tarea: Tarea) {
    this.listaTarea.push(tarea);
  }
}
