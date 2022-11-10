import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaComponentComponent } from './actualiza-component.component';

describe('ActualizaComponentComponent', () => {
  let component: ActualizaComponentComponent;
  let fixture: ComponentFixture<ActualizaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
