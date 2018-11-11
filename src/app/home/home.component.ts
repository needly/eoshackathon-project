import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ehp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: {}[];

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  ngOnInit() {
    this.db.list('projects').snapshotChanges()
    .subscribe((project) => {
      this.projects = project.map((item: any) => {
        return {
          key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

  navigateToProject(project) {
    this.router.navigateByUrl(`/project/${project.key}`);
  }

}
