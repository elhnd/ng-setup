import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";

export class FormNumberField extends FormBaseField<number> {
  override type = FormFieldType.NUMBER;
}