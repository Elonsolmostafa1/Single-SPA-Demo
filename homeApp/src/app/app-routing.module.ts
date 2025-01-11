import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path:"**" , component:EmptyRouteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{provide:APP_BASE_HREF , useValue:"/"}]
})
export class AppRoutingModule { }
/*
1 html 
1 css file 
1 js file (module ===> bundlefile.js)


*/
