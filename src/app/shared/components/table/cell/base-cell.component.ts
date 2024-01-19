import { Component, Input } from "@angular/core";
import { CellComponent } from "../cell-component.interface";
import { TableColumn } from "@core/models/table/table-column";



@Component({
    template: ''
})
export class BaseCellComponent implements CellComponent {
    @Input() element:any;
    @Input() tableColumn!: TableColumn;
}