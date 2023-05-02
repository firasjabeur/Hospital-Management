import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
  }
  onButtonClick() {
    this.http.get('http://localhost:5000/run_tkinter').subscribe(
      (response) => {
        console.log(response);
        // Handle the response from the server
      },
      (error) => {
        console.log(error);
        // Handle any errors that occur
      }
    );

}
onButtonClick1() {
  this.router.navigate(['/createappointment'])
}

onButtonClick2() {
  this.router.navigate(['/medicinelist'])
}


}
