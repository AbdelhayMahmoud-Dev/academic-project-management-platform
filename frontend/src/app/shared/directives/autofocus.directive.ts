import { Directive, ElementRef, AfterViewInit, inject } from '@angular/core';

@Directive({
  selector: '[dsAutofocus]',
  standalone: true,
})
export class AutofocusDirective implements AfterViewInit {
  private el = inject(ElementRef<HTMLInputElement>);

  ngAfterViewInit() {
    setTimeout(() => this.el.nativeElement.focus(), 0);
  }
}