import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFieldModule } from './base-field.module';
import { BaseFieldComponent } from './base-field.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  standalone: true,
  selector: 'app-slide-toggle',
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
export class SlideToggleFieldComponent extends BaseFieldComponent<number> {}