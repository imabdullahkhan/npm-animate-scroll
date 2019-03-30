import { OnInit, Directive } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[NgxAnimationScroll]'
})
export class NgxAnimationScrollDirective implements OnInit {

  constructor() {
    console.log('its Working');
  }

  ngOnInit() {
  }

}
