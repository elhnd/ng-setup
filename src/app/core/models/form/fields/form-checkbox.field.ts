import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";

export class FormCheckboxField extends FormBaseField<boolean> {
  override type = FormFieldType.CHECKBOX;
}