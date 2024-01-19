import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFieldComponent } from './base-field.component';
import { BaseFieldModule } from './base-field.module';
import { MatSliderModule } from '@angular/material/slider';
import { NumberInput } from '@angular/cdk/coercion';

@Component({
  standalone: true,
  selector: 'app-slider',
  template: `
    <div [formGroup]="form" >
      <mat-slider>
        <input [id]="field.key" [formControlName]="field.key" [value]="field.value" matSliderThumb>
      </mat-slider>
    </div>
  `,
  imports: [
    BaseFieldModule,
    MatSliderModule
  ],
  styleUrl: 'field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderFieldComponent extends BaseFieldComponent<NumberInput> {}