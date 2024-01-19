
import { TableCellType } from "@core/models/table/table-cell-type.enum";
import { 
    CheckboxCellComponent, 
    DateCellComponent, 
    DefaultCellComponent, 
    ImageCellComponent, 
    SlideToggleCellComponent } from "./cell";
import { LinkCellComponent } from "./cell/link-cell.component";
import { CellComponent } from "./cell-component.interface";
import { Type } from "@angular/core";

export class CellBuilder {

    constructor(private tableCellType: TableCellType) {}

    build() {

        const componentMap: { [key in TableCellType]: Type<CellComponent> }  = {
            [TableCellType.TEXT]        : DefaultCellComponent,
            [TableCellType.CHECKBOX]    : CheckboxCellComponent,
            [TableCellType.DATE]        : DateCellComponent,
            [TableCellType.SLIDE_TOGGLE]: SlideToggleCellComponent,
            [TableCellType.IMAGE]       : ImageCellComponent,
            [TableCellType.LINK]        : LinkCellComponent
        }

        return componentMap[this.tableCellType];
    }
}