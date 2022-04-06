import { ListCarritoComponent } from './list-carrito/list-carrito.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent
  },
  {
    path:'products/detail/:nombre',
    component:ProductDetailsComponent
  },
  {
    path:'carrito',
    component:ListCarritoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
