import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpngNavComponent } from './shpng-nav.component';

describe('ShpngNavComponent', () => {
  let component: ShpngNavComponent;
  let fixture: ComponentFixture<ShpngNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShpngNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShpngNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
