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
    nombre: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    contenido: new FormControl('', [Validators.required]),
    etiquetas: new FormControl('', [Validators.required]),
  })

  guardarTarea(tarea: Tarea){
    if (this.form.invalid) {
      alert('La informacion ingresada es incorrecta o incompleta');
      return
    }

    //const tarea: Tarea = <Tarea>(this.form.getRawValue());
    // receta.imagen = this.previsualizacion;

    // this._recetaService.agregarReceta(receta)

    // this.form.reset();
    // this.previsualizacion = '';

    // this._recetaFirebaseService.save(receta);

    this._tareaService.addTarea(tarea);
  }
}
