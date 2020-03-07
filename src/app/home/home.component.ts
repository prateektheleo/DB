import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title="Dash Back Home Page"
  constructor(private tss:Title) { 
  }

  ngOnInit() {
    this.tss.setTitle(this.title);
  }

}
