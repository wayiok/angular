import {Component, NgModule, OnInit} from '@angular/core';


@Component({
  selector: 'app-heaader',
  templateUrl: './heaader.component.html',
  styleUrls: ['./heaader.component.css']
})




export class HeaaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deployMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
