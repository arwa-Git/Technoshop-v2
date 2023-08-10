import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = [
    "../assets/images/pexels-photo-5632402.jpeg",
    "../assets/images/pexels-photo-5632402.jpeg",
    "../assets/images/pexels-photo-5632402.jpeg"
  ];
}
