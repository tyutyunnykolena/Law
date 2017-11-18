import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthBlockComponent } from './sixth-block.component';

describe('SixthBlockComponent', () => {
  let component: SixthBlockComponent;
  let fixture: ComponentFixture<SixthBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
