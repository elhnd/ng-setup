import {ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFieldComponent } from './base-field.component';
import { BaseFieldModule } from './base-field.module';

@Component({
  standalone: true,
  selector: 'app-text-area',
  template: `
    <mat-form-field [formGroup]="form" class="field" appearance="outline">
      <mat-label [attr.for]="field.key">{{ field.label }}</mat-label>
      <textarea matInput [placeholder]="field.placeholder" 
        [value]="field.value" 
        [formControlName]="field.key" 
        [id]="field.key" 
        [type]="field.type"></textarea>
    </mat-form-field>
  `,
  imports: [ 
    BaseFieldModule 
  ],
  styleUrl: 'field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaFieldComponent extends BaseFieldComponent <string>{}