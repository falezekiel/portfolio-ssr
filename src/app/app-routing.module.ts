import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BodyComponent} from "./body/body.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: BodyComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
