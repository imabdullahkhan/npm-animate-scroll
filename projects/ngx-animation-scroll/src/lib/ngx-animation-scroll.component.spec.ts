import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnimationScrollDirective } from './ngx-animation-scroll.directive';

describe('NgxAnimationScrollComponent', () => {
  let component: NgxAnimationScrollDirective;
  let fixture: ComponentFixture<NgxAnimationScrollDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxAnimationScrollDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAnimationScrollDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
