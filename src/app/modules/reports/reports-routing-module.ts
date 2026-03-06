import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReportsComponent } from './pages/list-reports/list-reports.component';

const routes: Routes = [
  {
    path: 'list-reports',
    component: ListReportsComponent
  },
  {
    path: '**',
    redirectTo: 'list-reports'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
