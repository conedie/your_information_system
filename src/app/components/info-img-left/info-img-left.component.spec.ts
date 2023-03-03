import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoImgLeftComponent } from './info-img-left.component';

describe('InfoImgLeftComponent', () => {
  let component: InfoImgLeftComponent;
  let fixture: ComponentFixture<InfoImgLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoImgLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoImgLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
