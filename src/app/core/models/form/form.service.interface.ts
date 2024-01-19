import { FormGroup } from '@angular/forms';
import { FormBaseField } from './fields';
import { NumberInput } from '@angular/cdk/coercion';

export interface FormServiceInterface {

  getFormFields(): FormBaseField<string | number | boolean | NumberInput>[];

  getFormGroup(): FormGroup;

}