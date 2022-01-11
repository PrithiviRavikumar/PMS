import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './AdminModule/Pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardPageComponent
  },
  // {
  //   path: 'typography',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule)
  // },
  // {
  //   path: 'tables',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
  // },
  // {
  //   path: 'notification',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
  // },
  // {
  //   path: 'ui',
  //   loadChildren: () => import('./pages/ui-elements/ui-elements.module').then(m => m.UiElementsModule)
  // },
  // {
  //   path: '404',
  //   component: NotFoundComponent
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
