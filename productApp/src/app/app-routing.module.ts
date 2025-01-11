import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path:"product/home" , component:HomeComponent },
  {path:"product/about" , component:AboutComponent},
  {path:"**" , component:EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{provide:APP_BASE_HREF , useValue:"/"}]
})
export class AppRoutingModule { }
/*
www.ejada.com/app1/home

*/