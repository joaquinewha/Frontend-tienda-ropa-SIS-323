import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() dataEntrante: any;
  public image:string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.image="https://source.unsplash.com/category/objetos/"
  }

}
