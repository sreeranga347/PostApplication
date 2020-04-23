import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './mainPage/home/home.component';


const routes: Routes = [
  
{path:'login',loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)},

{path:'sign-up',loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpModule)},
{path:'home',component:HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
