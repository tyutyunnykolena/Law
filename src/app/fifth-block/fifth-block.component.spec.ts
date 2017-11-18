import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthBlockComponent } from './fifth-block.component';

describe('FifthBlockComponent', () => {
  let component: FifthBlockComponent;
  let fixture: ComponentFixture<FifthBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
