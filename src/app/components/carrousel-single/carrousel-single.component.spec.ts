import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselSingleComponent } from './carrousel-single.component';

describe('CarrouselSingleComponent', () => {
  let component: CarrouselSingleComponent;
  let fixture: ComponentFixture<CarrouselSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
