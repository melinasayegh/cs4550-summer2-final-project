import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { CreateRecipePageComponent } from './pages/create-recipe-page/create-recipe-page.component';

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'profile', component: ProfilePageComponent },
    { path: 'results/:search', component: SearchResultsPageComponent },
    { path: 'recipe/:recipeId', component: RecipePageComponent },
    { path: 'newRecipe', component: CreateRecipePageComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
