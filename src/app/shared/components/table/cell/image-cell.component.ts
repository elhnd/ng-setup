import {ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseCellComponent } from './base-cell.component';

@Component({
  standalone: true,
  selector: 'app-image-cell',
  template: `
    <img [src]="" style="width:50px; height:auto;" />
  `,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrl: ''
})
export class ImageCellComponent extends BaseCellComponent {}