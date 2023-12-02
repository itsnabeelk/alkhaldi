import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ManagementComponent } from './pages/management/management.component';
import { TeamComponent } from './pages/team/team.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';

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
];
