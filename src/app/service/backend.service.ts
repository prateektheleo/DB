import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BakendService {
Url="http://103.129.98.168:1234/"
// 103.129.98.168
  constructor(private http:HttpClient) { }

  // login
  login(data){
    return this.http.post(this.Url+'loginDash',data);
  }
  // Add Member
  addMember(data){
    return this.http.post(this.Url+'addMemberDash',data);
  }
  // fetch Direct
  fetchDirect(data){
    return this.http.get(this.Url+'fetchDirectDash/'+data);
  }
  // fetch Name
  fetchName(data){
    return this.http.get(this.Url+'fetchNameDash/'+data);
  }
  //   fetch Team 
  fetchTeam(data){
    return this.http.get(this.Url+'fetchTeamDash/'+data);
  }
  // update password
  updatePass(data){
    return this.http.post(this.Url+'updatePassDash',data);
  }
  // personal info update
  updateInfo(data){
    return this.http.post(this.Url+'updateInfoDash',data);
  }
  //  Update Legal
  updateLegal(data){
    return this.http.post(this.Url+'updateLegalDash',data);
  }
  //   Update Acc
  updateAcc(data){
    return this.http.post(this.Url+'updateAccDash',data);
  }
  // find Pass
  findPass(data){
    return this.http.post(this.Url+'findPassDash',data);
  }
  // admin login
  adminLog(data){
    return this.http.post(this.Url+'adminLogDash',data);
  }
  //  Activate
  activate(data){
    return this.http.post(this.Url+'activateDash',data);
  }
  // Fetch Members
  fetchMember(){
    return this.http.get(this.Url+'fetchMemberDash');
  }
  //  Delete Member
  deleteMem(data){
    return this.http.get(this.Url+'deleteMemDash/'+data);
  }
  // fetch Active
  fetchActive(){
    return this.http.get(this.Url+'fetchActiveDash');
  }
  // PAYOUT
  payout(data){
    return this.http.post(this.Url+'payoutDash',data);
  }
  // create id
  createId(data){
    return this.http.post(this.Url+'createDash',data);
  }
  // register
  register(data){
    return this.http.get(this.Url+'regiDash/'+data);
  }
  // fetch Baclance 
  fetchBal(data){
    return this.http.get(this.Url+'fetchBal/'+data);
  }
  // fetch session
  fetchSes(data){
    return this.http.get(this.Url+'fetchSes/'+data);
  }
  // call query
  call(data){
    return this.http.post(this.Url+'call',data);
  }
  // welcome call list
  callList(){
    return this.http.get(this.Url+'callList');
  }
  // Account opening call list
  accList(){
    return this.http.get(this.Url+'accList');
  }
  // search by mobile
  mobSearch(data){
    return this.http.get(this.Url+'mobile/'+data);
  }
  // Raise query
  query(data){
    return this.http.post(this.Url+'query',data);
  }
  // generate Password
  genPass(data){
    return this.http.get(this.Url+'genPass/'+data);
  }
  //  Update Form
  updateForm(data){
    return this.http.post(this.Url+'updateForm',data);
  }
  // skip 
  skip(data){
    return this.http.post(this.Url+'skip',data);
  }
  // add-Profile
  addProfile(data){
    return this.http.post(this.Url+'addProfile',data);
  }
}
