import { FormBaseField } from "./form-base.field";
import { FormFieldType } from "../form-field-type.enum";

export class FormFileField extends FormBaseField<string> {
  override type = FormFieldType.FILE;
  override icon: string = "attach_file";
}