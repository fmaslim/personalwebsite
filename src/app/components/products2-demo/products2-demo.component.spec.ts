import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products2DemoComponent } from './products2-demo.component';

describe('Products2DemoComponent', () => {
  let component: Products2DemoComponent;
  let fixture: ComponentFixture<Products2DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Products2DemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Products2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
