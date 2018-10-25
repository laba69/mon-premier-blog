import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';

import { AppareilService } from './service/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}
}
