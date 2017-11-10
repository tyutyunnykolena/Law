import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInformationComponent } from './all-information.component';

describe('AllInformationComponent', () => {
  let component: AllInformationComponent;
  let fixture: ComponentFixture<AllInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
