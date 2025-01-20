import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { IProducto } from './interfaces/iproducto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsListComponent, ProductFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'ProductosAngularJarm';
}
