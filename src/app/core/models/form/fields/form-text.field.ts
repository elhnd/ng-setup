import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";

export class FormTextField extends FormBaseField<string> {
  override type = FormFieldType.TEXT;
}