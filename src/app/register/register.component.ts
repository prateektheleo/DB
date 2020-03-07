import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
mobile;
detail:FormGroup;
resObj;
resData;
Msg;
name;
id;
sponser:boolean =true;
  constructor(private bs: BakendService, private route:ActivatedRoute, private fb: FormBuilder) {
    this.mobile = this.route.snapshot.paramMap.get("id");
    this.bs.register(this.mobile).subscribe((res)=>{
      this.resObj = res
      if(this.resObj == null){
        this.detail.controls['sponserId'].setValue('DB200100005')
        this.detail.controls['sponserName'].setValue('Dash Back');
      }
      else{
        this.name = this.resObj.name
        this.id = this.resObj.id
        this.detail.controls['sponserId'].setValue(this.id)
        this.detail.controls['sponserName'].setValue(this.name);
      }
    })
   }

  ngOnInit() {
    this.detForm();
    if(this.mobile == 'DB200100005' || this.mobile == null){
      this.sponser = false
      this.detail.controls['sponserId'].setValue('DB200100005')
      this.detail.controls['sponserName'].setValue('Dash Back');
    }
  }
  detForm(){
    this.detail = this.fb.group({
      'id': ['',Validators.required],
      'name' : ['',Validators.required],
      'mobile': ['',[Validators.required,Validators.pattern]],
      'email': ['',[Validators.required,Validators.pattern]],
      'sponserId': [{value :'',disabled: true},Validators.required],
      'sponserName': [{value :'',disabled: true},Validators.required],
      'aadhar': [''],
      'pan': ['']
    })
  }
  members(){
    var formData = this.detail.getRawValue();
    var serilize = formData;
    console.log(serilize);
    this.bs.addMember(serilize).subscribe((res)=>{
      this.resData = res
      // console.log(this.resData)
      this.Msg = this.resData.msg
      // this.LoginId = '. Your Login ID is '+this.resData.data3.loginId;
      if(this.resData.err == 0){
        this.detail.reset();
      }
    })
  }
} 