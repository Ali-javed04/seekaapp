import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { TopHeaderComponent } from './component/top-header/top-header.component';
import { LeftNavComponent } from './component/left-nav/left-nav.component';
import { RightNavComponent } from './component/right-nav/right-nav.component';
import { HomeComponent } from './component/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { ScholorshipComponent } from './component/home/scholorship/scholorship.component';
import { FormsModule} from '@angular/forms';
import { ArticleComponent } from './component/home/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopHeaderComponent,
    LeftNavComponent,
    RightNavComponent,
    HomeComponent,
    ScholorshipComponent,
    ArticleComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB5kl9bgc3-0E2MMxwx8X6K3ezRRaegg_c",
      authDomain: "seeka-5b806.firebaseapp.com",
      projectId: "seeka-5b806",
      storageBucket: "seeka-5b806.appspot.com",
      messagingSenderId: "838520643076",
      appId: "1:838520643076:web:1fb7a74979830fa93b9f51",
      measurementId: "G-1CHVWXFPJS"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
