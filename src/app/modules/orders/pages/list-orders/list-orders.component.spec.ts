import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { ListOrdersComponent } from './list-orders.component';
import { TableOrdersComponent } from '../../components/table-orders/table-orders.component';

describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;
  let mockOrdersService: Partial<OrdersService>;

  beforeEach(async () => {
    mockOrdersService = {
      getAllOrders: jest.fn().mockReturnValue(of([]))
    };

    await TestBed.configureTestingModule({
      declarations: [ListOrdersComponent, TableOrdersComponent],
      providers: [
        { provide: OrdersService, useValue: mockOrdersService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
