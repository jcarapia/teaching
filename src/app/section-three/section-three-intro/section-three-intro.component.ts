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
    $('[data-toggle="popover"]').popover();
  }

  ngOnDestroy() {
    console.log('destroying');
    var els = document.getElementsByClassName("popover");
    for(var i = 0, all = els.length; i < all; i++){   
         els[i].classList.add('invisible');
     }
  }

}
