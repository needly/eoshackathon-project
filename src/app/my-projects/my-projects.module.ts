import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [MyProjectsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MyProjectsModule { }
