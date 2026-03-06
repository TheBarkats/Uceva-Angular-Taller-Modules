import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ReportsService } from '../../services/reports.service';
import { ListReportsComponent } from './list-reports.component';
import { TableReportsComponent } from '../../components/table-reports/table-reports.component';

describe('ListReportsComponent', () => {
  let component: ListReportsComponent;
  let fixture: ComponentFixture<ListReportsComponent>;
  let mockReportsService: Partial<ReportsService>;

  beforeEach(async () => {
    mockReportsService = {
      getAllReports: jest.fn().mockReturnValue(of([]))
    };

    await TestBed.configureTestingModule({
      declarations: [ListReportsComponent, TableReportsComponent],
      providers: [
        { provide: ReportsService, useValue: mockReportsService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
