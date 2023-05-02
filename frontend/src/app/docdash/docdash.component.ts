import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';


@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html', 
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent implements OnInit {
  searchText: string;
  patients: Patient[]; 
  doctor :Doctor;

  constructor(private patientService: PatientService, private doctorService : DoctorService,
    private router: Router) { }

    getCurrentDoctor(){
      this.doctorService.getCurrentDoctor().subscribe(doctor =>
      {if(doctor) this.doctor=doctor;console.log("le vendeur "+this.doctor.nom+" est connecté");});
  }



  ngOnInit(): void {
    this.getPatients();
    this.getCurrentDoctor()
    
  }

  private getPatients(){
    this.patientService.getPatientslist().subscribe(data => { this.patients = data; 
    });
  }

  viewPatient(id: number) {

    this.router.navigate(['viewpatient', id]);

  }
  updatePatient(id: number) {

    this.router.navigate(['updatepatient', id]);

  }

  navigate() {
    this.router.navigate(['/appointmentlist/' + this.doctor.id])
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    } ); 
  }

}
