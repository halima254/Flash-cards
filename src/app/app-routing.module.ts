import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'signup', component:SignupComponent},
  {path:'subjects', component:SubjectsComponent},
  {path:'user', component:UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
