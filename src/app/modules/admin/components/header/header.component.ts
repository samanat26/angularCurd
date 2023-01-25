import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor ( private auth:AuthService , public api : ApiService){}
 
  ngOnInit(){
  }

  logout(): void{
    this.auth.logout();

 }

}
