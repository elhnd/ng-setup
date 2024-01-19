import {ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseCellComponent } from './base-cell.component';

@Component({
  standalone: true,
  selector: 'app-default-cell',
  template: `
    <span>{{ element[tableColumn.dataKey] }}</span>
  `,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrl: ''
})
export class DefaultCellComponent extends BaseCellComponent {}