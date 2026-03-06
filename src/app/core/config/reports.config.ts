import { Report } from "../../modules/reports/interfaces/reports.interface";

/**
 * Listado de reportes del sistema.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {Report[]}
 */
export const REPORTS: Report[] = [
  {
    id: 1,
    title: 'Reporte de Ventas Mensuales',
    type: 'Ventas',
    generatedDate: '2026-03-01',
    generatedBy: 'Carlos Ramírez',
    status: 'Completado'
  },
  {
    id: 2,
    title: 'Inventario General',
    type: 'Inventario',
    generatedDate: '2026-03-02',
    generatedBy: 'Ana Gómez',
    status: 'Completado'
  },
  {
    id: 3,
    title: 'Análisis de Usuarios Activos',
    type: 'Usuarios',
    generatedDate: '2026-03-03',
    generatedBy: 'Luis Martínez',
    status: 'En proceso'
  },
  {
    id: 4,
    title: 'Balance Financiero Trimestral',
    type: 'Financiero',
    generatedDate: '2026-03-03',
    generatedBy: 'María López',
    status: 'Completado'
  },
  {
    id: 5,
    title: 'Reporte de Ventas Semanales',
    type: 'Ventas',
    generatedDate: '2026-03-04',
    generatedBy: 'Jorge Fernández',
    status: 'Pendiente'
  },
  {
    id: 6,
    title: 'Stock de Productos Críticos',
    type: 'Inventario',
    generatedDate: '2026-03-04',
    generatedBy: 'Paola Ríos',
    status: 'Error'
  },
  {
    id: 7,
    title: 'Comportamiento de Usuarios',
    type: 'Usuarios',
    generatedDate: '2026-03-05',
    generatedBy: 'Andrés Torres',
    status: 'Completado'
  },
  {
    id: 8,
    title: 'Flujo de Caja Mensual',
    type: 'Financiero',
    generatedDate: '2026-03-05',
    generatedBy: 'Lucía Mendoza',
    status: 'En proceso'
  },
  {
    id: 9,
    title: 'Proyección de Ventas Q2',
    type: 'Ventas',
    generatedDate: '2026-03-05',
    generatedBy: 'Sofía Pérez',
    status: 'Completado'
  },
  {
    id: 10,
    title: 'Estado Patrimonial',
    type: 'Financiero',
    generatedDate: '2026-03-05',
    generatedBy: 'Miguel Castro',
    status: 'Completado'
  }
];
