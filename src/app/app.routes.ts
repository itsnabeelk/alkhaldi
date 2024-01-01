import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ManagementComponent } from './pages/management/management.component';
import { TeamComponent } from './pages/team/team.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { Company2Component } from './pages/companies/company2/company2.component';
import { Company3Component } from './pages/companies/company3/company3.component';
import { Company4Component } from './pages/companies/company4/company4.component';
import { Company5Component } from './pages/companies/company5/company5.component';
import { Company7Component } from './pages/companies/company7/company7.component';
import { Company6Component } from './pages/companies/company6/company6.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
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
        path: 'team',
        component: TeamComponent,
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
        path: 'companies',
        component: CompaniesComponent,
    },
    {
        path: 'company2',
        component: Company2Component,
    },
    {
        path: 'company3',
        component: Company3Component,
    },
    {
        path: 'company4',
        component: Company4Component,
    },
    {
        path: 'company5',
        component: Company5Component,
    },
    {
        path: 'company6',
        component: Company6Component,
    },
    {
        path: 'company7',
        component: Company7Component,
    },
];
