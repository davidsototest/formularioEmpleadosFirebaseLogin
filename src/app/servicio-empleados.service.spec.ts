import { TestBed } from '@angular/core/testing';

import { ServicioEmpleadosService } from './servicio-empleados.service';

describe('ServicioEmpleadosService', () => {
  let service: ServicioEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
