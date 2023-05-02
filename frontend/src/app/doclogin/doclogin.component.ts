import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DoctorService } from '../doctor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent {
  model: any = {};
  
  constructor(private router: Router, private clientservice: DoctorService){}
 
  loginUser() {
    var client = this.model.email;
    var password = this.model.password;
    console.log(client);
    this.clientservice.login(client, password).subscribe((res : any) => {
        console.log("client connecté");
        console.log('res',res)
        localStorage.setItem('token',res.token)
        
      
        this.clientservice.getClientByEmail(client).subscribe(data=>{
          const idclient : number=data.id
          this.router.navigate(['/docdash/'+idclient]) })},

        (error: HttpErrorResponse) => {
        alert("invalid user");
        console.log(error); } )}

}
