import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isTableActive : boolean = false 
  // isGetActive : boolean =false
  defaultValues: any ={
    id: undefined,  
    fname : '',
    lname:'',
    states:'',
    course:'',
    subdate:'',
    gender:''
  }
  constructor(private http:HttpClient) { }

  postData(data:any){
    return this.http.post<any>("http://localhost:3000/enrollment/",data);
  }

  getData(){
    return this.http.get<any>("http://localhost:3000/enrollment/");
}
  putData(data:any , id: string | undefined ){
    return this.http.put<any>("http://localhost:3000/enrollment/"+id,data);
  }
  deleteData(id:string){
    return this.http.delete<any>("http://localhost:3000/enrollment/"+id);
}
}
