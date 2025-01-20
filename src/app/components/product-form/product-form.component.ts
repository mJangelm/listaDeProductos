import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProducto } from '../../interfaces/iproducto';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

modelForm: FormGroup;
@Output() envioFormulario: EventEmitter<IProducto> = new EventEmitter;

constructor() {
this.modelForm = new FormGroup({
name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
price: new FormControl(null, [Validators.required, Validators.min(0)]),
image: new FormControl (null, [Validators.required, Validators.pattern(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i)]),
category: new FormControl (null, [Validators.required,  Validators.pattern(/^(niño|mujer|hombre)$/i)])
//pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
}, [])

}

getDataForm() {
let producto: IProducto = this.modelForm.value as IProducto;
producto.active = true;
console.log(producto);
this.envioFormulario.emit(producto);

this.modelForm.reset();
}

checkControl(formControlName : string, validador: string) : boolean | undefined {

return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched
}

}
