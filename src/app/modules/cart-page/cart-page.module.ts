import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule,
    SharedModule
  ]
})
export class CartPageModule { }
