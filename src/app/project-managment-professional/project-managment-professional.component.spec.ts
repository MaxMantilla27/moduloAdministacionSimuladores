import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagmentProfessionalComponent } from './project-managment-professional.component';

describe('ProjectManagmentProfessionalComponent', () => {
  let component: ProjectManagmentProfessionalComponent;
  let fixture: ComponentFixture<ProjectManagmentProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagmentProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagmentProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
