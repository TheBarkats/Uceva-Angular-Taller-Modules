import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { REPORTS } from '../../../core/config/reports.config';
import { Report } from '../interfaces/reports.interface';

/**
 * Servicio para gestionar reportes.
 *
 * Se encarga de proporcionar métodos para obtener los reportes de la aplicación.
 * Actualmente devuelve un listado de reportes de ejemplo definidos en `REPORTS`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los reportes.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private reportsService: ReportsService) {}
 *
 * ngOnInit() {
 *   this.reportsService.getAllReports().subscribe(reports => {
 *     console.log(reports);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  /**
   * Obtiene todos los reportes disponibles.
   *
   * @returns Observable con el listado de reportes (`Report[]`).
   */
  getAllReports(): Observable<Report[]> {
    return of(REPORTS);
  }
}
