import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() {
    this.post = new Post();
   }

  ngOnInit() {
  }

  onLoveIt(loveIt: boolean): void {
    if (loveIt) {
      this.post.loveIts++;
    } else {
      this.post.loveIts--;
    }
  }
}
