import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurdersRoutingModule } from './orders-routing.module';
import { AllTabsComponent } from './pages/all-tabs/all-tabs.component';
import { OrdersItemComponent } from './component/orders-item/orders-item.component';
import { PendingOrdersComponent } from './pages/pending-orders/pending-orders.component';



@NgModule({
  declarations: [
    OrdersItemComponent,
    AllTabsComponent,
    PendingOrdersComponent
  ],
  imports: [
    CommonModule,
    OurdersRoutingModule,
  ]
})
export class OrdersModule { }
