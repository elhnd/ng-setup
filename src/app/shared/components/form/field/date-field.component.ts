import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BaseFieldModule } from './base-field.module';
import { BaseFieldComponent } from './base-field.component';

@Component({
  standalone: true,
  selector: 'app-date',
  template: `
    <mat-form-field [formGroup]="form" class="field" appearance="outline">
      <mat-label [attr.for]="field.key">{{ field.label }}</mat-label>
      <input [id]="field.key" matInput [formControlName]="field.key" [matDatepicker]="picker">
      <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
  imports: [ 
    BaseFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  styleUrl: 'field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateFieldComponent extends BaseFieldComponent<string> {}