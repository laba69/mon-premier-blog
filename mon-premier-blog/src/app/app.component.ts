import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts: Post[];
  p1: Post = new Post();
  p1.title = 'Mon premier post';
  p1.content = 'ssssssssssssssssss';
  
  p2: Post = new Post();
  p3: Post = new Post();
  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'aaaaaaaaaaaaaaa',
      loveIts: 0
    },

    {
      title: 'Mon deuxieme post',
      content: 'bbbbbbbbbbbbb',
      loveIts: 1
    }

  ];
}
