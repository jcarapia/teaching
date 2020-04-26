import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { SectionTwoIntroComponent } from './section-two/section-two-intro/section-two-intro.component';
import { SectionTwoThoughtsComponent } from './section-two/section-two-thoughts/section-two-thoughts.component';
import { SectionTwoPerspectivesComponent } from './section-two/section-two-perspectives/section-two-perspectives.component';
import { SectionTwoVideoOneComponent } from './section-two/section-two-video-one/section-two-video-one.component';
import { SectionTwoVideoTwoComponent } from './section-two/section-two-video-two/section-two-video-two.component';
import { SectionTwoVideoDebriefComponent } from './section-two/section-two-video-debrief/section-two-video-debrief.component';
import { SectionTwoReferencesComponent } from './section-two/section-two-references/section-two-references.component';
import { SectionTwoWrapUpComponent } from './section-two/section-two-wrap-up/section-two-wrap-up.component';
import { SectionThreeIntroComponent } from './section-three/section-three-intro/section-three-intro.component';
import { SectionThreeThoughtsComponent } from './section-three/section-three-thoughts/section-three-thoughts.component';
import { SectionThreePerspectivesComponent } from './section-three/section-three-perspectives/section-three-perspectives.component';
import { SectionThreeVideoComponent } from './section-three/section-three-video/section-three-video.component';
import { SectionThreeVideoDebriefComponent } from './section-three/section-three-video-debrief/section-three-video-debrief.component';
import { SectionThreeReferencesComponent } from './section-three/section-three-references/section-three-references.component';
import { SectionThreeWrapUpComponent } from './section-three/section-three-wrap-up/section-three-wrap-up.component';
import { SectionFourIntroComponent } from './section-four/section-four-intro/section-four-intro.component';
import { SectionFourThoughtsComponent } from './section-four/section-four-thoughts/section-four-thoughts.component';
import { SectionFourPerspectivesComponent } from './section-four/section-four-perspectives/section-four-perspectives.component';
import { SectionFourDmisComponent } from './section-four/section-four-dmis/section-four-dmis.component';
import { SectionFourActivityComponent } from './section-four/section-four-activity/section-four-activity.component';
import { SectionFourDmisEmpathyComponent } from './section-four/section-four-dmis-empathy/section-four-dmis-empathy.component';
import { SectionFourReferencesComponent } from './section-four/section-four-references/section-four-references.component';
import { SectionFourWrapUpComponent } from './section-four/section-four-wrap-up/section-four-wrap-up.component';
import { SectionSixComponent } from './section-six/section-six.component';

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
    SectionOneReferencesComponent,
    SectionTwoIntroComponent,
    SectionTwoThoughtsComponent,
    SectionTwoPerspectivesComponent,
    SectionTwoVideoOneComponent,
    SectionTwoVideoTwoComponent,
    SectionTwoVideoDebriefComponent,
    SectionTwoReferencesComponent,
    SectionTwoWrapUpComponent,
    SectionThreeIntroComponent,
    SectionThreeThoughtsComponent,
    SectionThreePerspectivesComponent,
    SectionThreeVideoComponent,
    SectionThreeVideoDebriefComponent,
    SectionThreeReferencesComponent,
    SectionThreeWrapUpComponent,
    SectionFourIntroComponent,
    SectionFourThoughtsComponent,
    SectionFourPerspectivesComponent,
    SectionFourDmisComponent,
    SectionFourActivityComponent,
    SectionFourDmisEmpathyComponent,
    SectionFourReferencesComponent,
    SectionFourWrapUpComponent,
    SectionSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
