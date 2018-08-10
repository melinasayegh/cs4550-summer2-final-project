import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyAppComponent } from './my-app/my-app.component';
import { routing } from './app.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import { RecipePreviewComponent } from './components/recipe-preview/recipe-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    HomePageComponent,
    NavBarComponent,
    RecipePreviewComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
