import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BaseFieldModule } from './base-field.module';
import { BaseFieldComponent } from './base-field.component';

@Component({
  standalone: true,
  selector: 'app-select',
  template: `
    <mat-form-field [formGroup]="form" class="field" appearance="outline">
      <mat-label [attr.for]="field.key">{{ field.label }}</mat-label>
      <mat-select [id]="field.key" [formControlName]="field.key">
        <mat-option>Clear</mat-option>
        @for (opt of field.options; track opt) {
          <mat-option [value]="opt.key">{{ opt.value }}</mat-option>
        }
      </mat-select>
    </mat-form-field>
  `,
  imports: [ 
    BaseFieldModule,
    MatSelectModule 
  ],
  styleUrl: 'field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectFieldComponent extends BaseFieldComponent<any> {}