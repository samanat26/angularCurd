import { MinLengthValidator } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

export class Signup{
    name: string| undefined;
    email: string | undefined;
    password: string | undefined;
    cpassword: string | undefined;
    gender: string | undefined;
    // phone_number: number| undefined;
  value: any;
  valid: any;
    // dob : string | undefined;


    formFields(){
        return <FormlyFieldConfig[]>[
            {
                //name
                key : 'name',
                type : 'input',
                templateOptions:{
                  type : 'name',
                  label: ' Name',
                  // placeholder: 'Enter Your ID',
                  required: true,
                  minLength:(2),
                  pattern:("[a-zA-Z].*"),
                },
                validation:{
                    messages:{
                        required:'You need to provide a name',
                        minLength: 'Your name is too short',
                        pattern: 'name should be start with alphabet'
                    }
                }
              },

            {
                //thats how our form looks like 
                key : 'email',
                type : 'input',
                templateOptions:{
                  type : 'email',
                  label: 'Email',
                  placeholder: 'xyz@gmail.com',
                  required: true,
                },
                validation:{
                    messages:{
                        required:'You need to provide an email!!'
                    }
                }
              },
              //pasword
              {
                //thats how our form looks like 
                key : 'password',
                type : 'input',
                templateOptions:{
                  type : 'password',
                  label: 'Password',
                  placeholder: 'Enter Your Password',
                  required: true,
                  minLength: (8),
                  maxLength:(20)
                },
                validation:{
                    messages:{
                        required:'You need to provide a Password!!',
                        minlength:'Password is weak!!!',
                        maxlength:'You have a strong password',

                    
                      }
                }
              },
              //confirm pasword
              {
                //thats how our form looks like 
                key : 'cpassword',
                type : 'input',
                templateOptions:{
                  type : 'password',
                  label: 'Confirm Password',
                  placeholder: 'Enter Your Password',
                  required: true,
                  // message: {pas}
                },
                validation:{
                    messages:{
                        required:'You need to provide a Password!!'
                    }
                }
              },
           
                 //gender
                 {
                    key: 'gender',
                    type: 'radio',
                    props: {
                      label: 'Gender',
                      placeholder: 'enter your gender',
                      // description: 'Description',
                      required: true,
                      options: [
                        { value: 1, label: 'Male' },
                        { value: 2, label: 'Female' },
                        // { value: 3, label: 'Others' },
                      ],
                    },
                  },

                  {
                    //phone number
                    key : 'number',
                    type : 'input',
                    templateOptions:{
                      // type : 'number',
                      label: ' Contact Number',
                      // placeholder: 'Enter Your ID',
                      required: true,
                      minLength:(10),
                      maxLength:(13),
                      pattern:("[0-9]*"),
                    },
                    validation:{
                        messages:{
                            required:'You need to provide a number',
                            minLength: 'Your name is too short',
                            pattern: 'Enter the numbers',
                            maxlength:'Your name is too long'
                        }
                    }
                  },
    
                  // date
                  // {
                  //   key: 'Datepicker',
                  //   type: 'datepicker',
                  //   props: {
                  //     label: 'Submission Date',
                  //     placeholder: 'Placeholder',
                  //     // description: 'Description',
                  //     required: true,
                  //   },
                  // },
        ]
    }
}

