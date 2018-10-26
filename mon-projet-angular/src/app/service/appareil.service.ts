import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilSubject = new Subject<any []>();
  constructor(private httpClient: HttpClient) { }
/*
  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }

  ];
*/
  private appareils = [];
  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }
getAppareilById(id: number) {
  const appareil = this.appareils.find ((a => a.id === id));
  return appareil;
}

switchOnAll() {
  for (let appareil of this.appareils) {
    appareil.status = 'allumé';
  }
  this.emitAppareilSubject();
}

switchOffAll() {
  for (let appareil of this.appareils) {
    appareil.status = 'éteint';
  }
  this.emitAppareilSubject();
}

switchOnOne(i: number) {
  this.appareils[i].status = 'allumé';
  this.emitAppareilSubject();
}

switchOffOne(i: number) {
  this.appareils[i].status = 'éteint';
  this.emitAppareilSubject();
}

addAppareil(name: string, status: string) {
  const appareilObject = {
    id: 0,
    name: '',
    status: ''
  };
  appareilObject.name = name;
  appareilObject.status = status;
  appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;

  this.appareils.push(appareilObject);
  this.emitAppareilSubject();
}

saveAppareilsToServer() {
  // avec le methode post, il y aura auatnt de group de istes d'appareils que de posts envoyés
  // this.httpClient.post('https://http-client-demo-1ba0a.firebaseio.com/appareils.json', this.appareils)
  this.httpClient.put('https://http-client-demo-1ba0a.firebaseio.com/appareils.json', this.appareils)
  .subscribe(
    () => {
      console.log('Enregistrement terminé !');
    },
    (error) => {
      console.log('Erreur de suavegarde: ' + error);
    }


  );
}

getAppareilsFromServer() {
  this.httpClient.get<any[]>('https://http-client-demo-1ba0a.firebaseio.com/appareils.json')
  .subscribe(
    (response) => {
      this.appareils = response;
      this.emitAppareilSubject();
    },
    (error) => {
      console.log('Erreur de chargement: ' + error);
    }
  );
}
}
