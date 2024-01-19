import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormBaseField, FormTextField } from "@core/models/form/fields";
import { FormPasswordField } from "@core/models/form/fields/form-password.field";
import { FormServiceInterface } from "@core/models/form/form.service.interface";

@Injectable()
export class AuthenticationFormService implements FormServiceInterface {

    getFormFields(): FormBaseField<string>[] {

        const form: FormBaseField<string>[] = [

            new FormTextField({
                key: 'username',
                label: 'Username',
                validations: {
                    constraints: [
                        Validators.required
                    ],
                    errorsMessages: {
                        'required': 'Username is required',
                    }
                }
            }),
            new FormPasswordField({
                key: 'password',
                label: 'Password',
                validations: {
                    constraints: [
                        Validators.required,
                        Validators.minLength(8),
                        Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z])'),
                    ],
                    errorsMessages: {
                        'required': 'Password is required',
                        'minlength': 'Minimum 8 caracters is required',
                        'pattern': 'Pasword must contain at last ....',
                    }
                }
            })
        ]

        return form.sort((a, b) => a.order - b.order);
    }

    getFormGroup(): FormGroup<any> {
        const group: any = {};
        this.getFormFields().forEach(field => {
            group[field.key] = new FormControl(field.value || '', field.validations.constraints)
        });
        return new FormGroup(group);
    }
}