import { FormlyFieldConfig } from "@ngx-formly/core";
// import { of } from 'rxjs';
import {states}from'src/app/modules/admin/components/view/view.component';


export class Add {
    id: string | undefined;
    fname: string | undefined;
    lname: string | undefined;
    states: string | undefined;
    course: string | undefined;
    gender: string | undefined;
    subdate: string | undefined;
    [name: string]: any;



    constructor(values?: Add) {
      if(!values) return;

      let key: string;
      for(key in values){
          this[key] = values[key];
      }

      // this.id = values.id;
      // this.fname = values.fname;
      // this.lname = values.lname;
      // this.states = values.states;
      // this.course = values.course;
      // this.gender = values.gender;
      // this.subdate = values.subdate;
    }

    formFields(){
        return <FormlyFieldConfig[]>[
            {
                //first name
                
                key : 'fname',
                name:'fname',
                type : 'input',
    
                templateOptions:{
                  type : 'fname',
                  label: 'First Name',
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
                //last Name 
                key : 'lname',
                type : 'input',
                name: 'lname',
                // defaultValue: 'hgfhgd',
                templateOptions:{
                  type : 'lname',
                  label: 'Last Name',
                  // placeholder: 'Enter Your Name',
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
  
              //State
              {
                key: 'states',
                type: 'autocomplete',
                props: {
                  required: true,
                  label: 'States',
                  // placeholder: 'Placeholder',
                  filter: (term: string) => term ? this.filterStates(term) : states.slice(),
                },
                validation:{
                  messages:{
                      required:'You need to provide a state',
                  }}
              },

              //Course e-g: graphic designing
              {
                key: 'course',
                type: 'select',
                props: {
                  label: 'Courses',
                  // placeholder: 'Placeholder',
                  // description: 'Description',
                  required: true,
                  multiple: [3],
                  // selectAllOption: 'Select Any 2',
                  options: [
                    { value: 1, label: ' Social Marketing' },
                    { value: 2, label: 'Graphic Designing' },
                    { value: 3, label: 'Freelancing' },
                    { value: 4, label: 'Technical Writing' },
                    { value: 5, label: 'Artificial Intelligence' },
                    { value:6, label: 'Content Creator' },
                  ],
                },
                validation:{
                  messages:{
                      required:'You have to select a course',
                      multiple:'select any three courses at a time'
                  }}
              },

              //gender
              {
                key: 'gender',
                type: 'radio',
                props: {
                  label: 'Gender',
                  placeholder: 'Placeholder',
                  // description: 'Description',
                  required: true,
                  options: [
                    { value: 'Male', label: 'Male' },
                    { value: 'Female', label: 'Female' },
                    // { value: 3, label: 'Others' },
                  ],
                },
                validation:{
                  messages:{
                      required:'You need to select a gender',
                  }}
              },

              //date
              {
                key: 'subdate',
                type: 'datepicker',
                props: {
                  label: 'Submission Date',
                  placeholder: 'Placeholder',
                  // description: 'Description',
                  required: true,
                },
                validation:{
                  messages:{
                      required:'You need to pick a date of enrollment',
                  }}
              },


        ]
    }
    filterStates(name: string) {
      return states.filter((state: { toString: () => string; }) => state.toString().toLowerCase().indexOf(name.toString().toLowerCase()) === 0);
    }
}


