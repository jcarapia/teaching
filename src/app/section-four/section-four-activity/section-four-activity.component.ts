import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four-activity',
  templateUrl: './section-four-activity.component.html',
  styleUrls: ['./section-four-activity.component.css']
})


export class SectionFourActivityComponent implements OnInit {

  answers = {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: ''
  }

  constructor() { }

  ngOnInit() {
  }

  response(q, a) {
    this.answers[q] = a;
  }

}
