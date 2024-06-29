import { Routes } from '@angular/router';
import { ThemeComponent } from './pages/theme/theme.component';
import { MulitpleThemesComponent } from './pages/mulitple-themes/mulitple-themes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'theme', pathMatch: 'full' },
  { path: 'theme', component: ThemeComponent },
  { path: 'theme-multiple', component: MulitpleThemesComponent },
];
