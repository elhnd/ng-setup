import { FormFieldType } from "../form-field-type.enum";

interface Validation {
  constraints: any[], 
  errorsMessages: { [key: string]: string }
}

interface Option {
  key: string,
  value: string
}

export class FormBaseField<T> {

  value: T | undefined;
  key: string = '';
  label: string = '';
  icon: string = '';
  placeholder: string = '';
  validations: Validation = { constraints: [], errorsMessages: {} };
  order: number = 1;
  type: FormFieldType = FormFieldType.TEXT;
  options: Option[] = [];
  mutiple: boolean = false;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      icon?: string,
      placeholder?: string,
      validations?: Validation,
      errorsMessages?: { [key: string]: string }
      order?: number,
      type?: FormFieldType,
      options?: Option[],
      mutiple?: boolean 
    } = {}) {
      
    this.value = options.value;
    this.key = options.key ?? this.key;
    this.label = options.label ?? this.label;
    this.icon = options.icon ?? this.icon;
    this.placeholder = options.placeholder ?? this.placeholder;
    this.validations = options.validations ?? this.validations;
    this.order = options.order ?? this.order;
    this.type = options.type ?? this.type;
    this.options = options.options ?? this.options;

    if (this.type === FormFieldType.SELECT || this.type === FormFieldType.FILE) {
      this.mutiple = options.mutiple ?? this.mutiple;
    }
  }
}