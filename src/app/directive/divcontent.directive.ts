import { Directive, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Directive({
  selector: 'div[contenteditable]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DivcontentDirective),
      multi: true,
    },
  ]
})
export class DivcontentDirective implements ControlValueAccessor {

  onChange: ((value: string) => void) | undefined;
  onTouched: (() => void) | undefined;

  constructor(private el: ElementRef<HTMLDivElement>) { }

  writeValue(value: string): void {
    this.el.nativeElement.textContent = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
