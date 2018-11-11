import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  NavigationEnd
} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs';
import { TextDecoder, TextEncoder } from 'text-encoding';

@Component({
  selector: 'ehp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public project: any;
  public rolesArray: any[] = [];
  private eosjsApi: any;
  private teams: any[] = [];

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getProject(params['id']);
      }
    });

    const defaultPrivateKey = '5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr'; // useraaaaaaaa
    const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
    const rpc = new JsonRpc('http://127.0.0.1:8000', { fetch });
    this.eosjsApi = new Api({
      rpc,
      signatureProvider,
      textDecoder: new TextDecoder(),
      textEncoder: new TextEncoder()
    });
  }

  getProject = (id) => {
    this.db
      .object(`/projects/${id}`)
      .valueChanges()
      .subscribe(proj => {
        this.project = proj;
        this.parseRoles();
        this.getMembers();
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

  getMembers = () => {
    Object.keys(this.project.members).forEach((val) => {
      this.db
        .object(`/userProfiles/${val}`)
        .valueChanges()
        .pipe(take(1))
        .subscribe(user => {
          this.teams.push(user);
        });
    });

    console.log(this.teams);
  }
}
