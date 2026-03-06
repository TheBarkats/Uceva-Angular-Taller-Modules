import { TestBed } from '@angular/core/testing';
import { ReportsService } from './reports.service';

describe('ReportsService', () => {
  let service: ReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of reports', (done) => {
    service.getAllReports().subscribe(reports => {
      expect(reports).toBeDefined();
      expect(Array.isArray(reports)).toBe(true);
      expect(reports.length).toBeGreaterThan(0);
      done();
    });
  });
});
