import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./generales/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./maestros/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'accounts', loadChildren: () => import('./maestros/accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'transactions', loadChildren: () => import('./transactions/transactions/transactions.module').then(m => m.TransactionsModule) },
  { path: 'dashboard', loadChildren: () => import('./transactions/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('./generales/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
