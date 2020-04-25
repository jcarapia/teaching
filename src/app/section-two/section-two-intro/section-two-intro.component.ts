import { Component, OnInit } from '@angular/core';

declare var $ : any;
@Component({
  selector: 'app-section-two-intro',
  templateUrl: './section-two-intro.component.html',
  styleUrls: ['./section-two-intro.component.css']
})
export class SectionTwoIntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#introTwoModal').modal('show');
    $('[data-toggle="popover"]').popover();
  }

}
