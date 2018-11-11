import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from './global/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private zone: NgZone,
        private router: Router
        public headerService: HeaderService
    ) {
        this.router.events.subscribe((val) => {
            headerService.isSubpage = this.router.url !== "/" ? true : false
        });

        window.onscroll = () => {
            zone.run(() => {
                if(window.pageYOffset > 100) {
                    headerService.isShrunk = true;
                } else {
                    headerService.isShrunk = false;
                }
            });
        }
    }

}
