import { Order } from "../../modules/orders/interfaces/orders.interface";

/**
 * Listado de pedidos del sistema.
 *
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 *
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes
 * - Ejercicios de arquitectura modular
 *
 * @type {Order[]}
 */
export const ORDERS: Order[] = [
  {
    id: 1,
    orderNumber: 'ORD-2026-001',
    customer: 'Carlos Ramírez',
    date: '2026-03-01',
    status: 'Entregado',
    total: 125000
  },
  {
    id: 2,
    orderNumber: 'ORD-2026-002',
    customer: 'Ana Gómez',
    date: '2026-03-02',
    status: 'En proceso',
    total: 85000
  },
  {
    id: 3,
    orderNumber: 'ORD-2026-003',
    customer: 'Luis Martínez',
    date: '2026-03-02',
    status: 'Pendiente',
    total: 230000
  },
  {
    id: 4,
    orderNumber: 'ORD-2026-004',
    customer: 'María López',
    date: '2026-03-03',
    status: 'Entregado',
    total: 67500
  },
  {
    id: 5,
    orderNumber: 'ORD-2026-005',
    customer: 'Jorge Fernández',
    date: '2026-03-03',
    status: 'Cancelado',
    total: 45000
  },
  {
    id: 6,
    orderNumber: 'ORD-2026-006',
    customer: 'Paola Ríos',
    date: '2026-03-04',
    status: 'En proceso',
    total: 156000
  },
  {
    id: 7,
    orderNumber: 'ORD-2026-007',
    customer: 'Andrés Torres',
    date: '2026-03-04',
    status: 'Entregado',
    total: 98000
  },
  {
    id: 8,
    orderNumber: 'ORD-2026-008',
    customer: 'Lucía Mendoza',
    date: '2026-03-05',
    status: 'Pendiente',
    total: 178000
  },
  {
    id: 9,
    orderNumber: 'ORD-2026-009',
    customer: 'Sofía Pérez',
    date: '2026-03-05',
    status: 'En proceso',
    total: 142000
  },
  {
    id: 10,
    orderNumber: 'ORD-2026-010',
    customer: 'Miguel Castro',
    date: '2026-03-05',
    status: 'Entregado',
    total: 89500
  }
];
