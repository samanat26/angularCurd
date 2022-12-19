import { Component, OnInit, ViewChild } from '@angular/core';
// import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'curd';

  displayedColumns: string[] = [ 'name', 'city', 'date','product','price','comment','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog: MatDialog, private api : ApiService) {

  }
  ngOnInit(): void {
    this.getAllProducts();
    throw new Error('Method not implemented.');
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllProducts();
      }
    })
  }

//get call

  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(err)=>{
        alert("error while fetching the Records")
      }
      
    })
  }

//edit the product

editproduct(row: any){
  this.dialog.open(DialogComponent, {
    width:'30%',
    data:row
}).afterClosed().subscribe(val=>{
  if (val==='update'){
    this.getAllProducts ();
  }
})
}

//delete the product

deleteRecord(id:number){
this.api.deleteRecord(id)
.subscribe({
  next:(res)=>{
    alert("product Deleted Successfully");
    this.getAllProducts();
  },
  error:()=>{
    alert("error while deleting the product!!")
  }
})
}

//filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
