import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

 @Output() envioEliminar: EventEmitter<IProducto> = new EventEmitter;
eliminar(arg0: IProducto) {
this.envioEliminar.emit(arg0);
}



@Input() elemento!: IProducto;
@Input() elementos! : IProducto[];

}
