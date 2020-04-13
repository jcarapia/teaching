import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { SectionFourComponent } from './section-four/section-four.component';
import { SectionFiveComponent } from './section-five/section-five.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'sectionOne', component: SectionOneComponent  },
  { path: 'sectionTwo', component: SectionTwoComponent  },
  { path: 'sectionThree', component: SectionThreeComponent  },
  { path: 'sectionFour', component: SectionFourComponent  },
  { path: 'sectionFive', component: SectionFiveComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
