import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";

export class FormSlideToggleField extends FormBaseField<string> {
  override type = FormFieldType.SLIDE_TOGGLE;
}