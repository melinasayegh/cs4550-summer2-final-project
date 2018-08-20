import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { CreateRecipePageComponent } from './pages/create-recipe-page/create-recipe-page.component';
import {RandomRecipeComponent} from './components/random-recipe/random-recipe.component';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';
import {AdminUsersComponent} from './pages/admin-users/admin-users.component';
import {RecipesPageComponent} from './pages/recipes-page/recipes-page.component';

const appRoutes: Routes = [
    { path: '',                 component: HomePageComponent },
    { path: 'login',            component: LoginPageComponent },
    { path: 'admin',            component: AdminPageComponent },
    { path: 'recipes',          component: RecipesPageComponent},
    { path: 'admin/user',            component: AdminUsersComponent },
    { path: 'admin/user/:userId',            component: AdminUsersComponent },
    { path: 'admin/recipe',            component: AdminPageComponent },
    { path: 'admin/recipe/:recipeId',            component: AdminPageComponent },
    { path: 'register',         component: RegisterPageComponent },
    { path: 'profile',          component: ProfilePageComponent },
    { path: 'results/:recipeTitle',  component: SearchResultsPageComponent },
    { path: 'recipe/:recipeId', component: RecipePageComponent },
    { path: 'recipe/create/new', component: CreateRecipePageComponent },
    { path: 'recipe/update/:recipeId', component: CreateRecipePageComponent },
    { path: 'random',           component: RandomRecipeComponent},
    { path: 'random/:tag',      component: RandomRecipeComponent},
    { path: '**',               component: HomePageComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
