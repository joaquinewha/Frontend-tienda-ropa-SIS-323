import { Injectable } from '@angular/core';

import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {

  productos: Product[];

  constructor() { 
    this.productos =[
      /*{
        id: 1,
        nombre: 'string',
        precio: 25,
        cantidad: 21
        /*color: 'string',
        talla: 'string',
      },*/
    ];
  }

  /*getCarrito() {
    return this.productos
  }
  setCarrito(producto: Product){
    this.productos.push(producto)
  }*/
  deleteData(key: string, producto: Product){
    for(let i=0;i<this.productos.length; i++){
      if(producto == this.productos[i]){
        this.productos.splice(i,1);
        localStorage.setItem(key,JSON.stringify(this.productos))
      }
    }
  }

  setCache(key: string, data:Product){
    this.productos.push(data)
    let productos: Product[]=[];
    if(localStorage.getItem(key)===null){
      productos.push(data)
      localStorage.setItem(key,'['+JSON.stringify(data)+']')
    }
    else{
      productos = JSON.parse(''+localStorage.getItem(key));      
      productos.push(data)
      localStorage.setItem(key,JSON.stringify(productos))
    }
  }
    
  getCache(key: string){
    if(localStorage.getItem(key)===null){
      return this.productos;
    }
    else{
      this.productos = JSON.parse(''+localStorage.getItem(key));
      return this.productos;
    }
  }

  remove(key:string):void {
    try{
      localStorage.removeItem(key);
    }catch(e){
      console.error('Error removing key', e)
    }
  }

  clear():void {
    try{
      localStorage.clear();
    }catch(e){
      console.error('Error cleaning localstorage', e)
    }
  }
  costoTotal(){
    let total: number = 0
    for(let i=0;i<this.productos.length; i++){
      total = total + this.productos[i].precio
    }
    return total;
  }
  cantidadProductos(key: string){
    if(localStorage.getItem(key)===null){
      return 0;
    }
    else{
      this.productos = JSON.parse(''+localStorage.getItem(key));
      return this.productos.length;
    }
  }
}

