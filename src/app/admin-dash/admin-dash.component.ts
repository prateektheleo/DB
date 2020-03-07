import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  name
  constructor(private router: Router) { }

  ngOnInit() {
    this.name= localStorage.getItem('name');
  }
  signOut(){
    localStorage.removeItem('mobile');
    localStorage.removeItem('name');
    this.router.navigate(['/login'])
  }
}
