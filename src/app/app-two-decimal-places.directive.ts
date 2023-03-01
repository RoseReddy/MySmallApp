import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppTwoDecimalPlaces]'
})
export class AppTwoDecimalPlacesDirective {
  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log(this.el.nativeElement.value);
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    const next: string = [current,event.key].join('');
    if (!next.match(this.regex)) {
      event.preventDefault();
    }
  }

}

