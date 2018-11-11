import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HeaderModule } from './global/header/header.module';
import { ProfileModule } from './profile/profile.module';
import { ProjectModule } from './project/project.module';
import { ApplyModule } from './apply/apply.module';
import { ApplicationsModule } from './applications/applications.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProfileModule,
    ProjectModule,
    ApplyModule,
    ApplicationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
