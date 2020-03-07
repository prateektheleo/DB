import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
addProfile:FormGroup
  constructor(private fb:FormBuilder,private bs: BakendService) { }

  ngOnInit() {
  }
  form(){
    this.addProfile = this.fb.group({
      'name':[''],
      'mob':['']
    })
  }
  mar(){
    
  }
}
