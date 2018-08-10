import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
