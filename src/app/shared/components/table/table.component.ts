import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LinkCellComponent } from './cell/link-cell.component';
import { DynamicCellComponent } from './dynamic-cell.component';
import { TableColumn } from '@core/models/table/table-column';
import { IResponse } from '@core/models/response.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSlideToggleModule,
    LinkCellComponent,
    DynamicCellComponent
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T=any> implements OnInit, AfterViewInit {

  tableDataSource: MatTableDataSource<any[]>  = new MatTableDataSource<any[]>([]);
  displayedColumns: string[] = [];
  pageDataInfos: {} = {}

  @ViewChild(MatPaginator, {static: false}) matPaginator!: MatPaginator;

  @Input() isPageable: boolean = false;
  @Input() isFilterable: boolean = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() paginationSizes: number[] = [10, 15, 20];
  @Input() defaultPageSize: number = this.paginationSizes[1];
  

  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  @Input() set tableDataResponse(data: IResponse<T>) {
    if(data) {
      this.setTableDataSource(data.items);
    }
  }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
  }

  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.matPaginator;
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data);
    this.tableDataSource.paginator = this.matPaginator;
  }

  pageChanged(event: { pageIndex: number; pageSize: number }) {
    console.log(this.tableDataSource.data);
    this.matPaginator.pageIndex + 1;
    this.tableDataResponse.page = event.pageIndex;
    this.tableDataResponse.itemsPerPage = event.pageSize;
    //this.loadData();
  }

}