import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthBlockComponent } from './fourth-block.component';

describe('FourthBlockComponent', () => {
  let component: FourthBlockComponent;
  let fixture: ComponentFixture<FourthBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
