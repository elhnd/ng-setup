import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBaseField } from '@core/models/form/fields';

@Injectable()
export class FormControlService {

  formGroup(fields: FormBaseField<string>[]) {
    const group: any = {};
    fields.forEach(field => {
      group[field.key] = new FormControl(field.value || '', field.validations.constraints)
    });
    return new FormGroup(group);
  }
  
}