import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { SectionFourComponent } from './section-four/section-four.component';
import { SectionFiveComponent } from './section-five/section-five.component';
import { SectionOneIntroComponent } from './section-one/section-one-intro/section-one-intro.component';
import { SectionOneThoughtsComponent } from './section-one/section-one-thoughts/section-one-thoughts.component';
import { SectionOnePerspectivesComponent } from './section-one/section-one-perspectives/section-one-perspectives.component';
import { SectionOneFactorsComponent } from './section-one/section-one-factors/section-one-factors.component';
import { SectionOneEmpathyClassComponent } from './section-one/section-one-empathy-class/section-one-empathy-class.component';
import { SectionOneQuizComponent } from './section-one/section-one-quiz/section-one-quiz.component';
import { SectionOneWrapUpComponent } from './section-one/section-one-wrap-up/section-one-wrap-up.component';
import { SectionOneReferencesComponent } from './section-one/section-one-references/section-one-references.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionOneIntroComponent,
    SectionOneThoughtsComponent,
    SectionOnePerspectivesComponent,
    SectionOneFactorsComponent,
    SectionOneEmpathyClassComponent,
    SectionOneQuizComponent,
    SectionOneWrapUpComponent,
    SectionOneReferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
