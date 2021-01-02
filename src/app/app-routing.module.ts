import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './ui/page/page.component';
import { pages } from './ui/page/pages-data';


const routes: Routes = [
  {
    component: PageComponent,
    path: '',
    data: pages.home
  },
  {
    component: PageComponent,
    path: 'about',
    data: pages.about
  },
  {
    component: PageComponent,
    path: 'projects',
    data: pages.projects
  },
  {
    component: PageComponent,
    path: 'sign_up',
    data: pages.sign_up
  },
  {
    component: PageComponent,
    path: 'services',
    data: pages.services
  },
  {
    component: PageComponent,
    path: 'meeting',
    data: pages.meet
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
