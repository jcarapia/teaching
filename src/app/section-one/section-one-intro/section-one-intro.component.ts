import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-section-one-intro',
  templateUrl: './section-one-intro.component.html',
  styleUrls: ['./section-one-intro.component.css']
})
export class SectionOneIntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#introOneModal').modal('show');
  }

}
