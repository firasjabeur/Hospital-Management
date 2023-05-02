import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment(1, '' ,'' , '', '', {id: 0});

  constructor(private appointmentService: AppointmentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAppointment() {
 
      this.appointment.doctor = {id : 0}; 
      const appointmentId = parseInt((<HTMLInputElement>document.getElementById("idv")).value, 10);
      console.log("Appointment ID: " + appointmentId);

      this.appointment.doctor.id = appointmentId;

    
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {
        console.log(data);
        this.goToAppointmentList();
    }, error => console.log(error));
}

  goToAppointmentList() {
    this.router.navigate(['/home'])
  }

  onSubmit() {

    this.appointment.doctor = {id : 0}; 
    console.log(this.appointment);
    this.saveAppointment();
  }

}
