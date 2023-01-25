import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  //adding object path
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'forget-password', component: ForgetPasswordComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { //lazyLoading only executes when user wants it to use
    path:'admin',
    canActivate:[AuthGuard],
    loadChildren:()=> import('./modules/admin/admin.module').then((m)=>m.AdminModule)
  },
  {path:'**', component: PageNotFoundComponent}, //wildcard-route for 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
