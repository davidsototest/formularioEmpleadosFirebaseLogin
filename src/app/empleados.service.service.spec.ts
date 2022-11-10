import { TestBed } from '@angular/core/testing';

import { EmpleadosServiceService } from './empleados.service.service';

describe('EmpleadosServiceService', () => {
  let service: EmpleadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
