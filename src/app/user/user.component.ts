import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name;
mobile;
  constructor(private router: Router, private bs: BakendService) { }

  ngOnInit() {
    this.name= localStorage.getItem('name');
    this.mobile= localStorage.getItem('mobile');
  }
  signOut(){
    localStorage.removeItem('mobile');
    localStorage.removeItem('name');
    this.router.navigate(['/login'])
  }
  session(){
    this.bs.fetchSes(this.mobile).subscribe((res)=>{
      console.log(res);
    })
  }
}
