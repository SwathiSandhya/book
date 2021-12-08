import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardcoverComponent } from './hardcover.component';

describe('HardcoverComponent', () => {
  let component: HardcoverComponent;
  let fixture: ComponentFixture<HardcoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardcoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardcoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
