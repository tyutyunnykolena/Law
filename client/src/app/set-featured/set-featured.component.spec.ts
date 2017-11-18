import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFeaturedComponent } from './set-featured.component';

describe('SetFeaturedComponent', () => {
  let component: SetFeaturedComponent;
  let fixture: ComponentFixture<SetFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
