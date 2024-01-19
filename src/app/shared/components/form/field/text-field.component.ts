import {ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFieldComponent } from './base-field.component';
import { BaseFieldModule } from './base-field.module';

@Component({
  standalone: true,
  selector: 'app-text',
  template: `
    <mat-form-field [formGroup]="form" class="field" appearance="outline">
      <mat-label [attr.for]="field.key">{{ field.label }}</mat-label>
      <input matInput [placeholder]="field.placeholder" 
        [formControlName]="field.key" 
        [id]="field.key" 
        [type]="field.type"
        [autocomplete]="field.type === 'password' ?  'current-password' : ''"
        >
        @if (field.icon) {
          <mat-icon matSuffix>{{field.icon}}</mat-icon>
        }
        @if(errors) {
          <mat-error>{{errors}}</mat-error>
        }
    </mat-form-field>
  `,
  imports: [
    BaseFieldModule
  ],
  styleUrl: 'field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldComponent extends BaseFieldComponent<string> {}