import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ServicioCarritoService } from '../servicio-carrito.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  title = 'backend-tienda-ropa';

  public listaProductos:any = []

  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('http://localhost:8080/productos/todos')
    .subscribe(respuesta=>{
      this.listaProductos = respuesta
    })
  }

}
