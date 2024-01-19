import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { BaseFieldModule } from './base-field.module';
import { BaseFieldComponent } from './base-field.component';

@Component({
  standalone: true,
  selector: 'app-file',
  template: `
    <mat-form-field [formGroup]="form" class="field" appearance="outline">
			<mat-label [attr.for]="field.key">{{ field.label }}</mat-label>
			<button type="button" mat-icon-button matPrefix >
        <mat-icon>{{field.icon}}</mat-icon>
      </button>
			<input type="text" readonly matInput 
        [placeholder]="field.placeholder" 
        [formControlName]="field.key"
        (click)="inputFile.click()" />
			<input
        [type]="field.type"
        multiple
        hidden
        #inputFile
        (change)="handleFileInputChange(inputFile.files, field.key)"
      />
		</mat-form-field>
  `,
  imports: [
    BaseFieldModule
  ],
  styleUrl: 'field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileFieldComponent extends BaseFieldComponent<string> {

  @Output() files: EventEmitter<FileList> = new EventEmitter<FileList>();

  handleFileInputChange(param1: FileList | null, param2: any) {
    if (param1) {
      this.files.emit(param1);
    }
  }
}