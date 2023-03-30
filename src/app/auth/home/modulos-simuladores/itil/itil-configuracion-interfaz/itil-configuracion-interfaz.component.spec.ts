import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItilConfiguracionInterfazComponent } from './itil-configuracion-interfaz.component';

describe('ItilConfiguracionInterfazComponent', () => {
  let component: ItilConfiguracionInterfazComponent;
  let fixture: ComponentFixture<ItilConfiguracionInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItilConfiguracionInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItilConfiguracionInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
