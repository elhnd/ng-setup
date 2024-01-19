import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFieldComponent } from './base-field.component';
import { BaseFieldModule } from './base-field.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  standalone: true,
  selector: 'app-checkbox',
  template: `
    <div [formGroup]="form" >
        <mat-checkbox [id]="field.key" [formControlName]="field.key" class="field" >{{ field.label }}</mat-checkbox>
    </div>
  `,
  imports: [ 
    BaseFieldModule,
    MatCheckboxModule
  ],
  styleUrl: 'field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxFieldComponent extends BaseFieldComponent<boolean> {}