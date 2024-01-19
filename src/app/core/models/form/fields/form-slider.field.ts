import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";
import { NumberInput } from "@angular/cdk/coercion";

export class FormSliderField extends FormBaseField<NumberInput> {
  override type = FormFieldType.SLIDER;
}