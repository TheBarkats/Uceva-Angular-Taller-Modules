/**
 * Interfaz que representa un reporte del sistema.
 *
 * Contiene la información básica necesaria para mostrar un reporte
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada reporte debe tener un `id` único, un título, tipo de reporte,
 * fecha de generación, usuario que lo generó y el estado.
 *
 * @example
 * ```ts
 * const reporte: Report = {
 *   id: 1,
 *   title: 'Reporte de Ventas Mensuales',
 *   type: 'Ventas',
 *   generatedDate: '2026-03-01',
 *   generatedBy: 'Carlos Ramírez',
 *   status: 'Completado'
 * };
 * ```
 */
export interface Report {
  /** Identificador único del reporte */
  id: number;

  /** Título del reporte */
  title: string;

  /** Tipo de reporte */
  type: ReportType;

  /** Fecha de generación del reporte */
  generatedDate: string;

  /** Usuario que generó el reporte */
  generatedBy: string;

  /** Estado del reporte */
  status: ReportStatus;
}

/**
 * Tipo de reporte.
 *
 * @remarks
 * Este tipo restringe los tipos de reporte a los valores predefinidos:
 * - 'Ventas'
 * - 'Inventario'
 * - 'Usuarios'
 * - 'Financiero'
 *
 * Se utiliza principalmente para categorizar reportes en la UI.
 *
 * @example
 * ```ts
 * const tipo: ReportType = 'Ventas';
 * ```
 */
export type ReportType = 'Ventas' | 'Inventario' | 'Usuarios' | 'Financiero';

/**
 * Tipo de estado de reporte.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Completado'
 * - 'En proceso'
 * - 'Pendiente'
 * - 'Error'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: ReportStatus = 'Completado';
 * ```
 */
export type ReportStatus = 'Completado' | 'En proceso' | 'Pendiente' | 'Error';
