import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { IProducto } from '../../interfaces/iproducto';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductFormComponent } from "../product-form/product-form.component";
import { ProductFilterComponent } from "../product-filter/product-filter.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent, ProductFormComponent, ProductFilterComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {


  private ProductoServicio = inject(ProductServiceService);
  productos!: IProducto[];
  producto! : IProducto;
  alta : boolean;
  filtro: boolean;
  
  
constructor() {
this.productos = []
this.alta = false;
this.filtro = false;
}
ngOnInit() : void {
this.productos = this.ProductoServicio.getAllProductos();
//this.ProductoServicio.peticionGetObservable().subscribe(data =>{
  //this.productos = data;
//})
}

eliminar($event: IProducto) {
  const index = this.productos.findIndex(producto => producto._id === $event._id);
  if (index !== -1) {
    this.productos.splice(index, 1); // Eliminar el producto encontrado
    console.log('Producto eliminado:', $event);
}
}
mostrarArray($event: IProducto) {
let id = 	this.productos.length;
let suma = id +1;
$event._id = "63740f5fe2c75d8744fadd" + suma.toString();
this.productos.push($event);

}

mostrarBusqueda($event: IProducto) {
  let arrayBusqueda: IProducto[] = [];
  this.productos = this.ProductoServicio.getAllProductos();

for (let producto of this.productos) {

const coincideName = $event.name ? producto.name?.includes($event.name) : true;
const coincidePrice = $event.price ? producto.price <= $event.price : true;
const coincideDescription = $event.description ? producto.description?.includes($event.description) : true;
const coincideCategory = $event.category ? producto.category?.includes($event.category) : true;

if (coincideName && coincidePrice && coincideDescription && coincideCategory) {
  arrayBusqueda.push(producto);
}
}

  this.productos = arrayBusqueda;
}

mostrarAlta() {
if (this.alta == false)
this.alta =  true;
else if (this.alta == true)
this.alta = false;

}

mostrarFiltro() {

if (this.filtro == false )
  this.filtro = true;

else if (this.filtro == true)
  this.filtro = false;

}


}
