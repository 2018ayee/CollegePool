import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingInfoComponent } from './posting-info.component';

describe('PostingInfoComponent', () => {
  let component: PostingInfoComponent;
  let fixture: ComponentFixture<PostingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
