import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsAdministrarUsuariosComponent } from './aws-administrar-usuarios.component';

describe('AwsAdministrarUsuariosComponent', () => {
  let component: AwsAdministrarUsuariosComponent;
  let fixture: ComponentFixture<AwsAdministrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsAdministrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsAdministrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
