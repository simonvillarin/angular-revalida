import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [DashboardComponent, ProductsComponent, UsersComponent],
  imports: [CommonModule, DashboardRoutingModule, MatIconModule],
})
export class DashboardModule {}
