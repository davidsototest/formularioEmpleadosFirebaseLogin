import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHijoCComponent } from './empleado-hijo-c.component';

describe('EmpleadoHijoCComponent', () => {
  let component: EmpleadoHijoCComponent;
  let fixture: ComponentFixture<EmpleadoHijoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoHijoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoHijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
