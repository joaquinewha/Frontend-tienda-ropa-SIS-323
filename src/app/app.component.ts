import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'backend-tienda-ropa';

  public listaProductos:Array<any> = []

  constructor(private RestService:RestService){

  }
  ngOnInit(): void {
  }

  /*public cargarData(){
    this.RestService.get
  }*/

}
