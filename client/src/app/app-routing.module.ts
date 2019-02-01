import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { ItemsComponent } from './components/items/items.component';
import { AboutComponent } from './components/about/about.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { WildCardComponent } from './components/wild-card/wild-card.component';

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate:[AuthGuard] },
  { path: 'item/create', component: CreateEventComponent, pathMatch: 'full', canActivate:[AuthGuard] },
  { path: 'items', component: ItemsComponent, pathMatch: 'full', canActivate:[AuthGuard] },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: WildCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, DashboardComponent, CreateEventComponent, ItemsComponent, AboutComponent, SignUpComponent, LoginComponent, WildCardComponent];
