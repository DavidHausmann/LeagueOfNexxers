import { TestBed } from '@angular/core/testing';
import { ServicesService } from './services.service';


describe('ServicesService', () => {
  let service: ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
