import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-section-three-intro',
  templateUrl: './section-three-intro.component.html',
  styleUrls: ['./section-three-intro.component.css']
})
export class SectionThreeIntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#introThreeModal').modal('show');
  }

}
