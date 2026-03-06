import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableOrdersComponent } from './components/table-orders/table-orders.component';
import { OrdersRoutingModule } from './orders-routing-module';
import { OrdersComponent } from './orders.component';
import { ListOrdersComponent } from './pages/list-orders/list-orders.component';

@NgModule({
  declarations: [
    TableOrdersComponent,
    ListOrdersComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
  ]
})
export class OrdersModule { }
