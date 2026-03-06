import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableReportsComponent } from './components/table-reports/table-reports.component';
import { ListReportsComponent } from './pages/list-reports/list-reports.component';
import { ReportsRoutingModule } from './reports-routing-module';
import { ReportsComponent } from './reports.component';

@NgModule({
  declarations: [
    TableReportsComponent,
    ListReportsComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
  ]
})
export class ReportsModule { }
