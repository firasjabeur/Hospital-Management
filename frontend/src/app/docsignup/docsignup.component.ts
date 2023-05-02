import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-docsignup',
  templateUrl: './docsignup.component.html',
  styleUrls: ['./docsignup.component.css']
})
export class DocsignupComponent implements OnInit {

  constructor(private router: Router, private service: DoctorService) { }

  ngOnInit(): void {   
  }
  data: any
  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    adresse : new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submitClient(){
    this.data = this.form.value
    console.log(this.data)
    this.service.adduser(this.data).subscribe(data => {
    console.log(data) })
    this.router.navigate(['/doclogin']);}
  

}


