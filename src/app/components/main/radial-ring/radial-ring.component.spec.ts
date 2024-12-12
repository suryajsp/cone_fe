import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialRingComponent } from './radial-ring.component';

describe('RadialRingComponent', () => {
  let component: RadialRingComponent;
  let fixture: ComponentFixture<RadialRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadialRingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadialRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
