import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetFormComponent } from './forget-form.component';

describe('ForgetFormComponent', () => {
  let component: ForgetFormComponent;
  let fixture: ComponentFixture<ForgetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
