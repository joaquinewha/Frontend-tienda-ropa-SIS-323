import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public detalles: any;
  public image:string | undefined;

  public high=Math.round(this.getRandomArbitrary(500,499));
  public width=Math.round(this.getRandomArbitrary(500,499))

  constructor(private route:ActivatedRoute, private RestService:RestService) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""

    this.route.paramMap.subscribe((paramMap:any) =>{
      const {params} = paramMap
      console.log(params.variable)
      this.cargarData(params)
    })
  }

  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  public cargarData(param_name:string){
    this.RestService.get('http://localhost:8080/productos/buscarc?nompro=${param_name}')
    .subscribe(respuesta=>{
      this.detalles = respuesta
    })
  }

}
