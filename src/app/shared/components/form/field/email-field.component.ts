import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFieldModule } from './base-field.module';
import { BaseFieldComponent } from './base-field.component';

@Component({
  standalone: true,
  selector: 'app-email',
  template: `
    <mat-form-field [formGroup]="form" class="field" appearance="outline">
      <mat-label [attr.for]="field.key">{{ field.label }}</mat-label>
      <input matInput [placeholder]="field.placeholder" 
        [formControlName]="field.key" 
        [id]="field.key" 
        [type]="field.type">
        @if (field.icon) {
          <mat-icon matSuffix>{{field.icon}}</mat-icon>
        }
    </mat-form-field>
  `,
  imports: [
    BaseFieldModule
  ],
  styleUrl: 'field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailFieldComponent extends BaseFieldComponent<string> {}