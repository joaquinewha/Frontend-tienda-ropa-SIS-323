import { ServicioCarritoService } from './../servicio-carrito.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() dataEntrante: any;

  public high=Math.round(this.getRandomArbitrary(300,250));
  public width=Math.round(this.getRandomArbitrary(200,150))
  
  public image:string | undefined;

  constructor(private Carrito:ServicioCarritoService) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""
  }
  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  public agregarCarrito(){
    this.Carrito.setCache('carrito',{
      id: this.dataEntrante.id_producto,
      nombre: this.dataEntrante.nombre,
      precio: this.dataEntrante.precio,
      cantidad: 1
      /*color: 'string',
      talla: 'string',*/
    });
    //console.log(this.Carrito.getCarrito());
    //console.log("Agregando datos al array")

  }
  /*public mostrarCarrito(){
    return (this.Carrito.getCarrito('1'))
  }*/


}
