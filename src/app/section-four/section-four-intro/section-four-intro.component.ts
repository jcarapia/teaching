import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-section-four-intro',
  templateUrl: './section-four-intro.component.html',
  styleUrls: ['./section-four-intro.component.css']
})
export class SectionFourIntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#introFourModal').modal('show');
  }

}


