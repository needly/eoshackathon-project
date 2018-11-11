import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ApplyComponent } from './apply/apply.component';
import { ApplicationsComponent } from './applications/applications.component';
import { NewProjectComponent } from './new-project/new-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:user', component: ProfileComponent },
  { path: 'my-projects/:user', component: MyProjectsComponent },

  { path: 'new-project', component: NewProjectComponent,
    children: [
      { path: '', redirectTo: 'step-one', pathMatch: 'full' },
      { path: 'step-one', component: NewProjectComponent },
      { path: 'step-two', component: NewProjectComponent },
      { path: 'step-three', component: NewProjectComponent },
    ]
  },

  { path: 'project/:id', component: ProjectComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'login', component: ApplicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      { enableTracing: false }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
