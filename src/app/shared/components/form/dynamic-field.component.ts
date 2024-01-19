import { Component, Input, OnInit, OnDestroy, ViewChild, Output, EventEmitter, inject, DestroyRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFieldDirective } from '@shared/directives/dynamic-field.directive';
import { FormBaseField } from '@core/models/form/fields';
import { FieldBuilder } from './field.builder';
import { FormFieldType } from '@core/models/form/form-field-type.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'app-form',
  imports: [DynamicFieldDirective],
  template: `<ng-template dynamicField></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFieldComponent implements OnInit, OnDestroy {

  @Input() form?: FormGroup;
  @Input() field!: FormBaseField<string | number | boolean>;
  
  @Output() files: EventEmitter<FileList> = new EventEmitter<FileList>();

  @ViewChild(DynamicFieldDirective, {static: true}) dynamicField!: DynamicFieldDirective;  
  private _destroyRef = inject(DestroyRef);

  constructor() { }
  
  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {

    const viewContainerRef = this.dynamicField.viewContainerRef;

    const componentRef = viewContainerRef.createComponent<any>((new FieldBuilder(this.field.type).build()));
    componentRef.setInput('form', this.form);
    componentRef.setInput('field', this.field);
    
    if (this.field.type === FormFieldType.FILE) {
      componentRef.instance.files
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(
        (files: FileList) => {
        this.files.emit(files);
      });
    }
  }

  ngOnDestroy() {
    this.dynamicField.viewContainerRef.clear();
  }
}