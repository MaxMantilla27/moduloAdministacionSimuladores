import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsReporteUsuariosComponent } from './aws-reporte-usuarios.component';

describe('AwsReporteUsuariosComponent', () => {
  let component: AwsReporteUsuariosComponent;
  let fixture: ComponentFixture<AwsReporteUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsReporteUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
