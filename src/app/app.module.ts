import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PreloaderComponent } from './component/preloader/preloader.component';
import { BannerComponent } from './component/banner/banner.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NewsComponent } from './pages/news/news.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { SocialComponent } from './pages/social/social.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ManagementComponent } from './pages/management/management.component';
import { CompaniesComponent } from './pages/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    BannerComponent,
    TimelineComponent,
    HomeComponent,
    AboutComponent,
    CareerComponent,
    GalleryComponent,
    NewsComponent,
    TeamsComponent,
    SocialComponent,
    ContactComponent,
    ManagementComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
