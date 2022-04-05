import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public param_name:string | undefined; 
  public image:string | undefined;

  public high=Math.round(this.getRandomArbitrary(500,499));
  public width=Math.round(this.getRandomArbitrary(500,499))

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""

    this.route.paramMap.subscribe((paramMap:any) =>{
      const {params} = paramMap
      console.log(params.variable)
    })
  }

  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

}
