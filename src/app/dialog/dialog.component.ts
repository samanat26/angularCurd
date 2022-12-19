import { createInjectableType } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent   {

  productList = ["Pen" , "pencil" , "eraser"];
  productForm !: FormGroup;
  actionBtn : string = "save";
  constructor (private formBuilder : FormBuilder, 
    private api : ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef :MatDialogRef<DialogComponent>)
    {}

  ngOnInit(): void{
    this.productForm = this.formBuilder.group({
      name : ['', Validators.required],
      city : ['', Validators.required],
      date : ['', Validators.required],
      product : ['', Validators.required],
      price : ['', Validators.required],
      comment : ['', Validators.required]
    
    });
    if(this.editData){
      this.actionBtn = "Update";
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['city'].setValue(this.editData.city);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['product'].setValue(this.editData.product);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comment'].setValue(this.editData.comment);
    }
  }

  //add product
  add(){
   if(!this.editData){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("product added successfully");
          this.productForm.reset();
          this.dialogRef.close("saved");
        },
        error:()=>{
          alert ("Error while adding the product")
        }
      })
    }
   }
   else{
    this.updateProduct()
   }
  }


  updateProduct(){
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe(
      {
        next:(res)=>{
          alert("product updated successfully");
          this.productForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert ("Error while updating the record!!");
        }      }
    )

  }
  

}
