import { AfterViewInit, Component, DestroyRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CrudService } from '@features/crud/services/crud.service';
import { CoreService } from '@core/services/core.service';
import { CrudAddEditComponent } from '../crud-add-edit/crud-add-edit.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-crud-list',
  standalone: true,
  imports: [ 
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  templateUrl: './crud-list.component.html',
  styleUrl: './crud-list.component.scss'
})
export class CrudListComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'action',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _crudService: CrudService,
    private _coreService: CoreService,
    private _destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    // this.getListExemple();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(CrudAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        console.log(val);
        
        if (val) {
          this.getListExemple();
        }
      },
    });
  }

  getListExemple() {
    this._crudService.getListExemple()
    .pipe(takeUntilDestroyed(this._destroyRef))
    .subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);  
        //this.dataSource.sort = this.sort;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
       }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngAfterViewInit() {
    this.getListExemple();
    // if (this.paginator) {
    //   this.dataSource.paginator = this.paginator;
    // }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteExemple(id: number) {
    this._crudService.deleteExemple(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Data deleted!', 'done');
        this.getListExemple();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CrudAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getListExemple();
        }
      },
    });
  }
}
