/**
 * Interfaz que representa un pedido del sistema.
 *
 * Contiene la información básica necesaria para mostrar un pedido
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada pedido debe tener un `id` único, un número de pedido,
 * cliente, fecha, estado y total.
 *
 * @example
 * ```ts
 * const pedido: Order = {
 *   id: 1,
 *   orderNumber: 'ORD-2026-001',
 *   customer: 'Carlos Ramírez',
 *   date: '2026-03-01',
 *   status: 'Entregado',
 *   total: 125000
 * };
 * ```
 */
export interface Order {
  /** Identificador único del pedido */
  id: number;

  /** Número de pedido */
  orderNumber: string;

  /** Nombre del cliente */
  customer: string;

  /** Fecha del pedido */
  date: string;

  /** Estado del pedido */
  status: OrderStatus;

  /** Total del pedido en pesos */
  total: number;
}

/**
 * Tipo de estado de pedido.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Pendiente'
 * - 'En proceso'
 * - 'Entregado'
 * - 'Cancelado'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: OrderStatus = 'Entregado';
 * ```
 */
export type OrderStatus = 'Pendiente' | 'En proceso' | 'Entregado' | 'Cancelado';
