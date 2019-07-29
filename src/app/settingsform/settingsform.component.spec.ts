import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsformComponent } from './settingsform.component';

describe('SettingsformComponent', () => {
  let component: SettingsformComponent;
  let fixture: ComponentFixture<SettingsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
