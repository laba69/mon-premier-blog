import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;

  appareils: any[];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
       resolve(date);
       this.isAuth = true;
      }, 2000
      );
  });
  constructor(private appareilService: AppareilService) {

  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }


  // appareilOne = 'Machine à laver';
  // appareilTwo = 'Frigo';
  // appareilThree = 'Ordinateur';

  onAllumer() {
    console.log('On allume tout !');
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      console.log('On éteint tout !');
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}
