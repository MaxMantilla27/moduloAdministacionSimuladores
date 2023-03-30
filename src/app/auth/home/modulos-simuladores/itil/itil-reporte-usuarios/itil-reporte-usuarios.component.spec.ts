import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilReporteUsuariosComponent } from './itil-reporte-usuarios.component';

describe('ItilReporteUsuariosComponent', () => {
  let component: ItilReporteUsuariosComponent;
  let fixture: ComponentFixture<ItilReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
