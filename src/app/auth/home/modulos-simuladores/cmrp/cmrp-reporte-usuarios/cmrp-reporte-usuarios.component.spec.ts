import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrpReporteUsuariosComponent } from './cmrp-reporte-usuarios.component';

describe('CmrpReporteUsuariosComponent', () => {
  let component: CmrpReporteUsuariosComponent;
  let fixture: ComponentFixture<CmrpReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmrpReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmrpReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
