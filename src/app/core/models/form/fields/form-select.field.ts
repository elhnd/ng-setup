import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";

export class FormSelectField extends FormBaseField<string> {
  override type = FormFieldType.SELECT;
}