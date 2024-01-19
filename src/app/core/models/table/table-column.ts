import { TableCellType } from "./table-cell-type.enum";

export interface TableColumn {
    name: string;
    dataKey: string;
    type: TableCellType;
    position?: 'right' | 'left';
    isSortable?: boolean;
    url?: string
}