import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicRouteComponent } from './dynamic-route/dynamic-route.component';

const routes: Routes = [
  { path: '', component: DynamicRouteComponent },
  //{ path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: DynamicRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
