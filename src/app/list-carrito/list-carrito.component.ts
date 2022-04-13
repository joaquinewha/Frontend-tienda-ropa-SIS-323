import { ServicioCarritoService } from './../servicio-carrito.service';
import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-list-carrito',
  templateUrl: './list-carrito.component.html',
  styleUrls: ['./list-carrito.component.css']
})
export class ListCarritoComponent implements OnInit {

  listaProductos: Product[] | undefined
  total:number | undefined;

  public image:string | undefined;
  public high=Math.round(this.getRandomArbitrary(150,149));
  public width=Math.round(this.getRandomArbitrary(150,149))

  constructor(private Carrito:ServicioCarritoService) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""
    //this.listaProductos=this.Carrito.getCache('carrito');
    this.Carrito.getObs('carrito').subscribe(carrito=>{
      this.listaProductos = carrito
      this.total=this.costoTotal(this.listaProductos);
    })
  }

  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  deleteData(producto:Product){
    this.Carrito.deleteData('carrito',producto)
  }
  costoTotal(productos:Product[]){
    let total = 0
    for(let i=0;i<productos.length; i++){
      total = total + productos[i].cantidad*productos[i].precio
    }
    return total;
  }

}
