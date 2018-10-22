import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts: Post[] = [
    new Post('Mon premier tuto Java', 'J\'ai appris à codé en Java sur siteduzero.com.\nCette fois j\'apprends Angular :)'),
    new Post('Faire communiquer angular et java', 'Je suis impatient de savoir mettre un front angular sur mon backend java standalone'),
    new Post('C\'est sur chouette angular', 'Hello angular\nCoucou angular\nFront-end angular')
  ];

}
