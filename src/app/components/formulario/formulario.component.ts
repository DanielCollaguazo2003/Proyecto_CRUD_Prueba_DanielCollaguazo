import { Component } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../domains/Tarea';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
tarea?: Tarea;

  constructor(private _tareaService: TareaService){
  }

  form = new FormGroup({
    identificador: new FormControl(1, []),
    nombre: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    ingredientes: new FormControl('', [Validators.required]),
    preparacion: new FormControl('', [Validators.required]),
    tipo: new FormControl('', []),
  })

  guardarTarea(tarea: Tarea){
    this._tareaService.addTarea(tarea);
  }
}
