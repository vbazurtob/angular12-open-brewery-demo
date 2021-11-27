import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {DetailsPageComponent} from "./details-page/details-page.component";

const routes: Routes = [
  {path: 'list', component: LandingPageComponent},
  {path: 'details/:id', component: DetailsPageComponent},
  {path: '**', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
