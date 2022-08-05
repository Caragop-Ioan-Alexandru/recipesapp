import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = !this.isOpen;
      console.log('dropdown activated');
      return;
    }
    this.isOpen = false;
    // this.isOpen = this.elRef.nativeElement.contains(event.target)
    //   ? !this.isOpen
    //   : false;
  }
  constructor(private elRef: ElementRef) {}
}
