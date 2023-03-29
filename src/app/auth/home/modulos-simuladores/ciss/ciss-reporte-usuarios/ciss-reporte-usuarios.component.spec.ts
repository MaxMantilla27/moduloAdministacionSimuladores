import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CissReporteUsuariosComponent } from './ciss-reporte-usuarios.component';

describe('CissReporteUsuariosComponent', () => {
  let component: CissReporteUsuariosComponent;
  let fixture: ComponentFixture<CissReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CissReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CissReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
