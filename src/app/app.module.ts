import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/main-page/home/home.component';
import { ProgramsComponent } from './pages/main-page/programs/programs.component';
import { HeroComponent } from './pages/main-page/hero/hero.component';
import { PartnerComponent } from './pages/main-page/partner/partner.component';
import { TeamComponent } from './pages/main-page/team/team.component';
import { ContactUsComponent } from './pages/main-page/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './pages/main-page/event/event.component';
import { CareerComponent } from './pages/main-page/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProgramsComponent,
    HeroComponent,
    PartnerComponent,
    TeamComponent,
    ContactUsComponent,
    EventComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
