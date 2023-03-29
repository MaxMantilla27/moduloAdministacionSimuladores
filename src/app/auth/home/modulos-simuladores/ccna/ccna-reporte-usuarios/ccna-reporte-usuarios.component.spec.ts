import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaReporteUsuariosComponent } from './ccna-reporte-usuarios.component';

describe('CcnaReporteUsuariosComponent', () => {
  let component: CcnaReporteUsuariosComponent;
  let fixture: ComponentFixture<CcnaReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcnaReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcnaReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
