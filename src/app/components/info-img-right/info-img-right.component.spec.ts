import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoImgRightComponent } from './info-img-right.component';

describe('InfoImgRightComponent', () => {
  let component: InfoImgRightComponent;
  let fixture: ComponentFixture<InfoImgRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoImgRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoImgRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
