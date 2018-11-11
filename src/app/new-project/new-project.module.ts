import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [NewProjectComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class NewProjectModule { }
