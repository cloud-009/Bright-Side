import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RecentComponent } from './recent/recent.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: DashboardComponent, children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent }
        ]
      },
      { path: "check", component: NewsletterComponent },
      { path: 'stand', component: RecentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
