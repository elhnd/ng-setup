import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormBaseField } from "@core/models/form/fields";
import { BaseFieldModule } from "./base-field.module";

@Component({
    standalone: true,
    template: '',
    imports: [
        BaseFieldModule,
    ]
})
export class BaseFieldComponent<T> {

    @Input() field!: FormBaseField<T>;
    @Input() form!: FormGroup;

    get errors() {   

        let key = this.field.key;
        let errors = this.form.controls[key].errors;
        let message: string = "";

        if (errors != null) {
            Object.keys(errors).forEach(keyError => {
              message = this.field.validations.errorsMessages[keyError]
            });
        }
        
        return message;
    }
}