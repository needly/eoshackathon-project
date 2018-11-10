import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'ehp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: {}[];

  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.db.list('projects').valueChanges()
    .subscribe((project) => {
      this.projects = project;
    });
  }

}
