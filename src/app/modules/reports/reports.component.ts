import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de reportes.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los reportes, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-reports></app-reports>
 * ```
 */
@Component({
  selector: 'app-reports',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class ReportsComponent { }
