import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  NavigationEnd
} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'ehp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public project: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getProject(params['id']);
      }
    });
  }

  getProject(id) {
    this.db
      .object(`/projects/${id}`)
      .valueChanges()
      .subscribe(proj => {
        this.project = proj;
      });
  }

  
}
