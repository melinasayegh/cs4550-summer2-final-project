import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyAppComponent } from './my-app/my-app.component';
import { routing } from './app.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecipePreviewComponent } from './components/recipe-preview/recipe-preview.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CategoryTagComponent } from './components/category-tag/category-tag.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FriendPreviewComponent } from './components/friend-preview/friend-preview.component';
import { RecipeReviewComponent } from './components/recipe-review/recipe-review.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { RandomRecipeComponent } from './components/random-recipe/random-recipe.component';
import { UserServiceClient } from './services/user.service.client';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    HomePageComponent,
    NavBarComponent,
    RecipePreviewComponent,
    LoginPageComponent,
    PageFooterComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    CategoryTagComponent,
    FriendPreviewComponent,
    RecipeReviewComponent,
    SearchResultsPageComponent,
    RecipePageComponent,
    RandomRecipeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
      UserServiceClient
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
