import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDropdownWidgetComponent } from './dynamic-dropdown-widget.component';

describe('DynamicDropdownWidgetComponent', () => {
  let component: DynamicDropdownWidgetComponent;
  let fixture: ComponentFixture<DynamicDropdownWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicDropdownWidgetComponent]
    });
    fixture = TestBed.createComponent(DynamicDropdownWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
