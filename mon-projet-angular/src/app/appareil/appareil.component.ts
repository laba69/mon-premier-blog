import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appreilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus ==='éteint'){
      return 'red';
    }
    if(this.appareilStatus ==='Allumé'){
      return 'green';
    }
  }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appreilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appreilService.switchOnOne(this.index);
    }
  }
}
