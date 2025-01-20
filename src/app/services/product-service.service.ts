import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/iproducto';
import { PRODUCTOS } from '../db/productos.db';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

private arrayProductos: IProducto[];



private id : number;

constructor(private httpClient: HttpClient) {
this.arrayProductos = PRODUCTOS;
this.id = PRODUCTOS.length +1;
}
peticionGetObservable(): Observable<any> {
  return this.httpClient.get('https://jsonblob.com/api/1330892763969019904');
}

getAllProductos() : IProducto[]  {
return this.arrayProductos;
}


}


