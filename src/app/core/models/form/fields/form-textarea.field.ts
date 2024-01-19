import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";

export class FormTextAreaField extends FormBaseField<string> {
  override type = FormFieldType.TEXTAREA;
}