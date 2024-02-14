import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialComponent } from './pages/social/social.component';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagementComponent } from './pages/management/management.component';
import { NewsComponent } from './pages/news/news.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { CompaniesComponent } from './pages/companies/companies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
},
{
    path: 'home',
    component: HomeComponent,
},
{
    path: 'about',
    component: AboutComponent,
},
{
    path: 'management',
    component: ManagementComponent,
},
{
    path: 'teams',
    component: TeamsComponent,
},
{
    path: 'gallery',
    component: GalleryComponent,
},
{
    path: 'career',
    component: CareerComponent,
},
{
    path: 'contact',
    component: ContactComponent,
},
{
    path: 'news',
    component: NewsComponent,
},
{
    path: 'social',
    component: SocialComponent,
},
{
    path: 'companies',
    component: CompaniesComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
