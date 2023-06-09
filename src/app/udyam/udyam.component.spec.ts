import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdyamComponent } from './udyam.component';

describe('UdyamComponent', () => {
  let component: UdyamComponent;
  let fixture: ComponentFixture<UdyamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UdyamComponent]
    });
    fixture = TestBed.createComponent(UdyamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
