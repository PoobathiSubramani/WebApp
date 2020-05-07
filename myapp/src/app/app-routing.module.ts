import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendComponent } from './frontend/frontend.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'


const appRoutes: Routes = [
  {path:'', component: FrontendComponent},
  {path:'home', component: FrontendComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
