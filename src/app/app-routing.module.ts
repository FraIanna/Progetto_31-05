import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/pages/home/home.component';
import { CompletedComponent } from './Components/pages/completed/completed.component';
import { UsersComponent } from './Components/pages/users/users.component';
import { Page404Component } from './Components/pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'completed',
    component: CompletedComponent,
    title: 'Completed',
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users',
  },
  {
    path: '**',
    component: Page404Component,
    title: 'Page not found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
