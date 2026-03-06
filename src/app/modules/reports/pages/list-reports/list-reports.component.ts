import { Component, inject, OnInit } from '@angular/core';
import { Report } from '../../interfaces/reports.interface';
import { ReportsService } from '../../services/reports.service';

/**
 * Componente contenedor de reportes.
 *
 * Se utiliza para gestionar y mostrar un listado de reportes
 * utilizando el componente `TableReportsComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ReportsService`
 * para obtener los reportes y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-reports></app-list-reports>
 * ```
 */
@Component({
  selector: 'app-list-reports',
  template: `<app-table-reports [reports]="reports" ></app-table-reports>`,
  standalone: false,
})
export class ListReportsComponent implements OnInit {
  /**
   * Listado de reportes obtenidos desde el servicio.
   * @type {Report[]}
   */
  reports: Report[] = [];
  /**
   * Servicio para obtener reportes.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private reportsService = inject(ReportsService);

  /**
   * Inicializa el componente y carga los reportes.
   * @remarks
   * Se suscribe al método `getAllReports()` del servicio y
   * asigna los datos recibidos a la propiedad `reports`.
   */
  ngOnInit(): void {
    this.reportsService.getAllReports().subscribe({
      next: (reports) => this.reports = reports,
      error: (error) => console.error(error),
    })
  }
}
