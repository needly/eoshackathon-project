import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

    public isShrunk = false;
    public isSubpage = false;

  constructor() { }
}
