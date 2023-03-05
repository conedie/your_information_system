import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentClientsComponent } from './current-clients.component';

describe('CurrentClientsComponent', () => {
  let component: CurrentClientsComponent;
  let fixture: ComponentFixture<CurrentClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
