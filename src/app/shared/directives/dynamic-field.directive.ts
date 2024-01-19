import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicField]',
  standalone: true
})
export class DynamicFieldDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
