import { OnInit, Component, ViewChild, OnDestroy} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
// import { ViewComponent } from '../view/view.component';

export interface UserData {
  id: string;
  fname: string;
  lname: string;
  course: string;
  states: string;
  gender: string;
  subdate: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  [x: string]: any;

  displayedColumns: string[] = [ 'fname',"lname", 'course','states', 'gender','subdate','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;
 
  constructor(private api : ApiService, private router: Router) {

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.api.isTableActive = true;
    // this.api.isGetActive =true;
    this.getAllData();
     }

getAllData(){
  this.api.getData()
  .subscribe(
    {
      next:(res)=>{
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator= this.paginator;
        this.dataSource.sort= this.sort;

      },
      error:(err)=>{
        alert('Error while fetch an error')
      }
    }
  )
}

edit(row : any){
  console.log(row);

  for(let key in row) {
    this.api.defaultValues[key]  = row[key];
  }
  this.router.navigate(['/admin/view'])
}

del(id:string){
  console.log(id);
  
  this.api.deleteData(id)
  .subscribe({
    next:(res)=>{
      this.getAllData();
      alert("Record is deleted successfully ")
    },
    error:()=>
    {
      alert('error while deleting the record')
    }
  })

}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    console.log('Destroy called');
    
    this.api.isTableActive = false;
    // this.api.isGetActive= false;
  }
}

