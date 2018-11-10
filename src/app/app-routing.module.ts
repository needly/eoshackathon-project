import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { ApplyComponent } from './apply/apply.component';
import { ApplicationsComponent } from './applications/applications.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/profile', component: ProfileComponent },
  { path: '/project', component: ProjectComponent },
  { path: '/apply', component: ApplyComponent },
  { path: '/applications', component: ApplicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
