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
import { CreateRecipePageComponent } from './pages/create-recipe-page/create-recipe-page.component';
import { RandomRecipeComponent } from './components/random-recipe/random-recipe.component';
import { UserServiceClient } from './services/user.service.client';
import {RecipeServiceClient} from './services/recipe.service.client';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RecipeCreatorComponent } from './components/recipe-creator/recipe-creator.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminUserComponent } from './components/admin/admin-user/admin-user.component';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import {ReviewServiceClient} from './services/review.service.client';
import {RecipeApiServiceClient} from './services/recipe-api.service.client';
import { RecipeApiPreviewComponent } from './components/recipe-api-preview/recipe-api-preview.component';
import { AdminCreateUserComponent } from './components/admin/admin-create-user/admin-create-user.component';
import { RecipeApiPageComponent } from './pages/recipe-api-page/recipe-api-page.component';

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
    CreateRecipePageComponent,
    RandomRecipeComponent,
    ProfileSettingsComponent,
    AdminPageComponent,
    RecipeCreatorComponent,
    AdminUsersComponent,
    AdminUserComponent,
    RecipesPageComponent,
    RecipeApiPreviewComponent,
    AdminCreateUserComponent,
    RecipeApiPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
      UserServiceClient,
      RecipeServiceClient,
      ReviewServiceClient,
      RecipeApiServiceClient
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
