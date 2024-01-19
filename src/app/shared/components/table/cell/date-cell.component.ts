import {ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BaseCellComponent } from './base-cell.component';

@Component({
  standalone: true,
  selector: 'app-date-cell',
  template: `
    <a [href]="element[tableColumn.dataKey]">{{ element[tableColumn.dataKey] }}</a>
  `,
  imports: [
    MatTableModule,
    MatSortModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrl: ''
})
export class DateCellComponent extends BaseCellComponent {}