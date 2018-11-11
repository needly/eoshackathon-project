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
  public rolesArray: any[] = [];

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getProject(params['id']);
      }
    });
  }

  getProject = (id) => {
    this.db
      .object(`/projects/${id}`)
      .valueChanges()
      .subscribe(proj => {
        this.project = proj;
        this.parseRoles();
      });
  }

  parseRoles = () => {
    Object.keys(this.project).forEach((key) => {
      if (key.includes('need')) {
        const role = {};
        const keySplit = key.split('-');

        role['name'] = [keySplit[1]];
        role['percentage'] = this.project[key];
        role['image'] = `../assets/${keySplit[1]}.png`;
        this.rolesArray.push(role);
      }
    });
  }
}
