import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {Add } from 'src/app/models/addForm.model';
import { ApiService } from 'src/app/services/api.service';

                                                       
export const states: string[] = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Pakistan',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

 
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  addForm: FormGroup;
  addModel: Add;
  addFields: Array<FormlyFieldConfig>;
  isUpdating: boolean = false;
  // fields: any;

constructor(private api : ApiService , private route:Router){
  this.addForm= new FormGroup({
  });
  this.addModel= new Add(this.api.defaultValues);
  console.log(this.addModel);
if(this.addModel.id) this.isUpdating = true;
  this.addFields= this.addModel.formFields();
 
  
}
 onSubmit(add: Add){
 if (this.addForm.valid){
  if(this.addModel.id) {
    this.updateProduct()
    return;
  }
  this.addModel.id = Math.random().toString();
  this.api.postData(this.addModel)
  .subscribe(
    {
      next:(res)=>{
        alert ("You are enrolled successfully")
        this.addForm.reset();
        this.route.navigate(['admin/home']);
      },
      error:()=>{
        alert ("error while adding information")
      }
    }
  )
 }
}
updateProduct(){
  this.api.putData(this.addModel, this.addModel.id)
  .subscribe ({
    next:(res)=>{
      alert("product updated")
      this.addForm.reset()
      this.route.navigate(['admin/home']);

    }
  })
}
}