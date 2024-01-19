import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";

export class FormDateField extends FormBaseField<string> {
  override type = FormFieldType.DATE;
}