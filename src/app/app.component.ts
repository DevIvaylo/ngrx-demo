// Notice how the dispatch calls are now being made by instantiating action objects.
// In the PostActions.EditText we can pass data to the constructor as the payload the gets processed by the reducer function.

import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Post} from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  post: Post;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post$: Observable<Post>;
  text: string;   // form input val

  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

}
