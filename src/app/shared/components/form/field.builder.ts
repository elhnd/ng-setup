import { FormFieldType } from "@core/models/form/form-field-type.enum";
import { 
    CheckboxFieldComponent,
    DateFieldComponent, 
    EmailFieldComponent, 
    FileFieldComponent, 
    NumberFieldComponent, 
    RadioFieldComponent, 
    SelectFieldComponent, 
    SlideToggleFieldComponent, 
    SliderFieldComponent, 
    TextAreaFieldComponent, 
    TextFieldComponent } from "./field";

export class FieldBuilder {

    constructor(private fieldType: FormFieldType) {}

    build() {

        const componentMap: { [key in FormFieldType]: any }  = {
            [FormFieldType.TEXT]        : TextFieldComponent,
            [FormFieldType.PASSWORD]    : TextFieldComponent,
            [FormFieldType.EMAIL]       : EmailFieldComponent,
            [FormFieldType.CHECKBOX]    : CheckboxFieldComponent,
            [FormFieldType.DATE]        : DateFieldComponent,
            [FormFieldType.FILE]        : FileFieldComponent,
            [FormFieldType.RADIO]       : RadioFieldComponent,
            [FormFieldType.SELECT]      : SelectFieldComponent,
            [FormFieldType.TEXTAREA]    : TextAreaFieldComponent,
            [FormFieldType.NUMBER]      : NumberFieldComponent,
            [FormFieldType.SLIDE_TOGGLE]: SlideToggleFieldComponent,
            [FormFieldType.SLIDER]      : SliderFieldComponent
        }

        return componentMap[this.fieldType];
    }
}