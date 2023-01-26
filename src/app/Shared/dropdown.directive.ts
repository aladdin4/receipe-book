import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleDropDown() {
    let menu = this.el.nativeElement.children[1];

    if (menu.classList.value.includes('show')) {
      this.renderer.removeClass(menu, 'show');
    } else {
      this.renderer.addClass(menu, 'show');
    }
  }
}
