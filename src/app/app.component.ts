import { Component, OnInit, ViewChild } from '@angular/core';
// import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from './services/api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'curd';

  displayedColumns: string[] = [ 'name', 'city', 'date','product','price','comment','action'];


  constructor(private dialog: MatDialog, private api : ApiService) {

  }
  ngOnInit(): void {
   
    throw new Error('Method not implemented.');
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){

      }
    })
  }
}