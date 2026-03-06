import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Report, ReportStatus, ReportType } from '../../interfaces/reports.interface';

/**
 * Componente de tabla de reportes.
 *
 * Se utiliza para mostrar un listado de reportes en una tabla,
 * mostrando información como título, tipo, fecha de generación, generado por y un badge
 * visual que indica el estado de cada reporte.
 *
 * @remarks
 * Este componente recibe los reportes desde un componente padre
 * a través del Input `reports` y utiliza los mapeos `statusMap` y `typeMap`
 * para asignar colores a los badges según el estado y tipo.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-reports [reports]="reportsList"></app-table-reports>
 * ```
 */
@Component({
  selector: 'app-table-reports',
  templateUrl: './table-reports.component.html',
  standalone: false,
})
export class TableReportsComponent {
  /**
   * Listado de reportes que se mostrarán en la tabla.
   * @type {Report[]}
   * @remarks
   * Este Input permite pasar un array de reportes desde un componente padre,
   * generalmente `ListReportsComponent`. Cada reporte debe cumplir la interfaz `Report`.
   */
  @Input() reports: Report[] = [];
  /**
   * Mapeo de estados de reportes a tipos de Badge.
   * @type {Record<ReportStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - 'Completado' → 'success' (verde)
   * - 'En proceso' → 'info' (azul claro)
   * - 'Pendiente' → 'warning' (amarillo)
   * - 'Error' → 'danger' (rojo)
   *
   * Esto permite que en la tabla cada reporte tenga un badge visual que indique su estado
   * de forma clara para el usuario.
   */
  statusMap: Record<ReportStatus, BadgeType> = {
    'Completado': 'success',
    'En proceso': 'info',
    'Pendiente': 'warning',
    'Error': 'danger'
  }
  /**
   * Mapeo de tipos de reportes a tipos de Badge.
   * @type {Record<ReportType, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada tipo:
   * - 'Ventas' → 'primary' (azul)
   * - 'Inventario' → 'warning' (amarillo)
   * - 'Usuarios' → 'info' (azul claro)
   * - 'Financiero' → 'success' (verde)
   *
   * Esto permite que en la tabla cada reporte tenga un badge visual que indique su tipo
   * de forma clara para el usuario.
   */
  typeMap: Record<ReportType, BadgeType> = {
    'Ventas': 'primary',
    'Inventario': 'warning',
    'Usuarios': 'info',
    'Financiero': 'success'
  }
}
