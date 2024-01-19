import {ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseCellComponent } from './base-cell.component';

@Component({
  standalone: true,
  selector: 'app-checkbox-cell',
  template: `
    <input type="checkbox" [checked]="element[tableColumn.dataKey]" />
  `,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrl: ''
})
export class CheckboxCellComponent extends BaseCellComponent {}