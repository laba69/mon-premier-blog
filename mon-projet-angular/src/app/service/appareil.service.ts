import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor() { }

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

switchOnAll() {
  for(let appareil of this.appareils) {
    appareil.status = 'allumé';
  }
}

switchOffAll() {
  for(let appareil of this.appareils) {
    appareil.status = 'éteint';
  }
}
}
