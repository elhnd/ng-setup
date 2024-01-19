import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DynamicFieldDirective } from '@shared/directives/dynamic-field.directive';
import { CellBuilder } from './cell.builder';
import { TableColumn } from '@core/models/table/table-column';
import { CellComponent } from './cell-component.interface';

@Component({
  standalone: true,
  selector: 'app-cell-table',
  imports: [DynamicFieldDirective],
  template: `<ng-template dynamicField></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicCellComponent {

  @Input() element:any;
  @Input() tableColumn!: TableColumn;
  @ViewChild(DynamicFieldDirective, {static: true}) dynamicField!: DynamicFieldDirective;  

  constructor() {}
  
  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentType = new CellBuilder(this.tableColumn.type).build();
    const viewContainerRef = this.dynamicField.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<CellComponent>(componentType);
    componentRef.setInput('tableColumn', this.tableColumn);
    componentRef.setInput('element', this.element);
  }
}