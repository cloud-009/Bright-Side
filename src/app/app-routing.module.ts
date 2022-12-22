import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from './addblog/addblog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

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
      { path: 'add-blog', component: AddblogComponent },
      { path: 'blogs', component: BlogsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
