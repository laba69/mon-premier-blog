import { Component } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
       resolve(date)
      }, 2000
      );
  });

  appareils=[{
    name:'Machine à laver',
    status:'éteint'
  },
  {
    name:'Frigo',
    status:'Allumé'
  },
  {
    name:'Ordinateur',
    status:'éteint'
  }

];
  // appareilOne = 'Machine à laver';
  // appareilTwo = 'Frigo';
  // appareilThree = 'Ordinateur';
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
