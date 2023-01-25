import { FormlyFieldConfig } from "@ngx-formly/core";

export class Login{
    email: string | undefined;
    password: string | undefined;
  valid: any;


    formFields(){
        return <FormlyFieldConfig[]>[
            {
                //thats how our form looks like 
                key : 'email',
                type : 'input',
                templateOptions:{
                  type : 'email',
                  label: 'Email',
                  placeholder: 'Enter Your Email Address',
                  required: true,
                },
                validation:{
                    messages:{
                        required:'You need to provide an email!!'
                    }
                }
              },

              {
                //thats how our form looks like 
                key : 'password',
                type : 'input',
                templateOptions:{
                  type : 'password',
                  label: 'Password',
                  placeholder: 'Enter Your Password',
                  required: true,
                },
                validation:{
                    messages:{
                        required:'You need to provide a Password!!'
                    }
                }
              },
        ]
    }
}

