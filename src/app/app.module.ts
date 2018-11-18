import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import {postReducer} from './reducers/post.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      post: postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
