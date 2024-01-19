import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudService } from '@features/crud/services/crud.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '@core/services/core.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-crud-add-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,  
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatOptionModule
  ],
  templateUrl: './crud-add-edit.component.html',
  styleUrl: './crud-add-edit.component.scss'
})
export class CrudAddEditComponent {

  empForm: FormGroup;

  testPipe: string = "tesstPie";
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _crudService: CrudService,
    private _dialogRef: MatDialogRef<CrudAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._crudService
          .updateExemple(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Data detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._crudService.addExemple(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Data added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
