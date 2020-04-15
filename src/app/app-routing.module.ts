import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionOneIntroComponent } from './section-one/section-one-intro/section-one-intro.component';
import { SectionOneThoughtsComponent } from './section-one/section-one-thoughts/section-one-thoughts.component';
import { SectionOnePerspectivesComponent } from './section-one/section-one-perspectives/section-one-perspectives.component';
import { SectionOneFactorsComponent } from './section-one/section-one-factors/section-one-factors.component';
import { SectionOneEmpathyClassComponent } from './section-one/section-one-empathy-class/section-one-empathy-class.component';
import { SectionOneQuizComponent } from './section-one/section-one-quiz/section-one-quiz.component';
import { SectionOneReferencesComponent } from './section-one/section-one-references/section-one-references.component';
import { SectionOneWrapUpComponent } from './section-one/section-one-wrap-up/section-one-wrap-up.component';

import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionTwoIntroComponent } from './section-two/section-two-intro/section-two-intro.component';
import { SectionTwoThoughtsComponent } from './section-two/section-two-thoughts/section-two-thoughts.component';
import { SectionTwoPerspectivesComponent } from './section-two/section-two-perspectives/section-two-perspectives.component';
import { SectionTwoVideoOneComponent } from './section-two/section-two-video-one/section-two-video-one.component';
import { SectionTwoVideoTwoComponent } from './section-two/section-two-video-two/section-two-video-two.component';
import { SectionTwoVideoDebriefComponent } from './section-two/section-two-video-debrief/section-two-video-debrief.component';
import { SectionTwoReferencesComponent } from './section-two/section-two-references/section-two-references.component';
import { SectionTwoWrapUpComponent } from './section-two/section-two-wrap-up/section-two-wrap-up.component';

import { SectionThreeComponent } from './section-three/section-three.component';


import { SectionFourComponent } from './section-four/section-four.component';


import { SectionFiveComponent } from './section-five/section-five.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'sectionOne', component: SectionOneComponent  },
  { path: 'sectionOneIntro', component: SectionOneIntroComponent },
  { path: 'sectionOneThoughts', component: SectionOneThoughtsComponent },
  { path: 'sectionOnePerspectives', component: SectionOnePerspectivesComponent },
  { path: 'sectionOneFactors', component: SectionOneFactorsComponent },
  { path: 'sectionOneEmpathyClass', component: SectionOneEmpathyClassComponent },
  { path: 'sectionOneQuiz', component: SectionOneQuizComponent },
  { path: 'sectionOneReferences', component: SectionOneReferencesComponent},
  { path: 'sectionOneWrapUp', component: SectionOneWrapUpComponent },

  { path: 'sectionTwo', component: SectionTwoComponent  },
  { path: 'sectionTwoIntro', component: SectionTwoIntroComponent },
  { path: 'sectionTwoThoughts', component: SectionTwoThoughtsComponent },
  { path: 'sectionTwoPerspectives', component: SectionTwoPerspectivesComponent },
  { path: 'sectionTwoVideoOne', component: SectionTwoVideoOneComponent },
  { path: 'sectionTwoVideoTwo', component: SectionTwoVideoTwoComponent },
  { path: 'sectionTwoVideoDebrief', component: SectionTwoVideoDebriefComponent },
  { path: 'sectionTwoReferences', component: SectionTwoReferencesComponent},
  { path: 'sectionTwoWrapUp', component: SectionTwoWrapUpComponent },

  { path: 'sectionThree', component: SectionThreeComponent  },
  { path: 'sectionFour', component: SectionFourComponent  },
  { path: 'sectionFive', component: SectionFiveComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
