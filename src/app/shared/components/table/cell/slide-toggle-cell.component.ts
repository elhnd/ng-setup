import {ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BaseCellComponent } from './base-cell.component';

@Component({
  standalone: true,
  selector: 'app-slide-toggle-cell',
  template: `
    <mat-slide-toggle 
      [name]="element.dataKey"
      ></mat-slide-toggle>
  `,
  imports: [
    MatSlideToggleModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrl: ''
})
export class SlideToggleCellComponent extends BaseCellComponent {}