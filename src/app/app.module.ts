import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyAppComponent } from './my-app/my-app.component';
import { routing } from './app.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { RecipePreviewComponent } from './components/recipe-preview/recipe-preview.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    HomePageComponent,
    NavBarComponent,
    RecipePreviewComponent,
    LoginPageComponent,
    PageFooterComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
