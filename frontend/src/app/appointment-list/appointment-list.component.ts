import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[];
  doctor : Doctor;

  constructor(private appointmentService: AppointmentService, private doctorService : DoctorService,
    private router: Router) { }

    getCurrentDoctor(){
      this.doctorService.getCurrentDoctor().subscribe(doctor =>
      {if(doctor) this.doctor=doctor;console.log("le vendeur "+this.doctor.nom+" est connecté"); this.getApointmentByDoctor(this.doctor.id)});
  }




  ngOnInit(): void {

this.getCurrentDoctor()
  }


  getApointmentByDoctor( id : number){
    this.appointmentService.getappointmentByDoctor(id).subscribe(data => {this.appointments=data});
  }


  deleteAppointment(id: number){ 
    this.appointmentService.deleteAppointment(id).subscribe( data => { 
      console.log(data);
      this.getApointmentByDoctor(this.doctor.id);
    })
  }

}
