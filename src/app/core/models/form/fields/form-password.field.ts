import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";

export class FormPasswordField extends FormBaseField<string> {
  override type = FormFieldType.PASSWORD;
}