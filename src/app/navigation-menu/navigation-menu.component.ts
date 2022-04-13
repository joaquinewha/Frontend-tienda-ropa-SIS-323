import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioCarritoService } from '../servicio-carrito.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  public nCarrito:number | undefined;

  public busquedaForm!: FormGroup;

  public resBusqueda:any= []

  constructor(private Carrito:ServicioCarritoService, private formBuilde: FormBuilder, private RestService:RestService) { }

  ngOnInit(): void {
    this.nCarrito=this.Carrito.getCache('carrito').length
    this.Carrito.getObs('carrito').subscribe(carrito=>{
      console.log(carrito.length)
      this.nCarrito = carrito.length
    })
    this.busquedaForm = this.formBuilde.group({
      busqueda: ['',Validators.required]
    });

  }

  public Busqueda(){    
    this.RestService.get("http://localhost:8080/productos/buscar?nombre="+this.busquedaForm.value.busqueda)
    .subscribe(respuesta =>{
      this.resBusqueda =respuesta;
      console.log(this.resBusqueda)
    })
  }

}
