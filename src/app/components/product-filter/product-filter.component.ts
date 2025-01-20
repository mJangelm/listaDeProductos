import { Component, EventEmitter, ImportProvidersSource, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProducto } from '../../interfaces/iproducto';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
modelForm!: FormGroup;
@Output() envioFiltroNombre: EventEmitter<any> = new EventEmitter;



constructor() {
this.modelForm = new FormGroup({
name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(40)]),
price: new FormControl(null, [Validators.min(0)]),
category: new FormControl (null, [Validators.pattern(/^(niño|mujer|hombre)$/i)]),
description: new FormControl(null, [ Validators.minLength(3)]),
}, [])

}

getDataForm() {
  let productoFiltro: IProducto = this.modelForm.value as IProducto;
  let name: string = productoFiltro.name;
  let price: number = productoFiltro.price;
  let category: string = productoFiltro.category;
  let description : string = productoFiltro.description;
 
  this.envioFiltroNombre.emit(productoFiltro);
 
  }

  checkControl(formControlName : string, validador: string) : boolean | undefined {

    return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched
    }
}
