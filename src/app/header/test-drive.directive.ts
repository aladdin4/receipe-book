import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTestDrive]',
})
export class TestDriveDirective {
  constructor(private e: ElementRef, private r: Renderer2) {}
  val = 0;

  @HostBinding('style') myStyle;

  @HostListener('click')
  clicked() {
    if (this.val % 2 == 0) {
      this.myStyle = { background: 'green', color: 'white' };
    } else {
      this.myStyle = { background: 'transparent', color: 'black' };
    }
    this.val++;
  }
}
