import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent implements OnInit {
  doctor : Doctor;
  patient: Patient = new Patient();
  constructor(private patientService: PatientService,private doctorService : DoctorService,
    private router: Router) { }

    getCurrentDoctor(){
      this.doctorService.getCurrentDoctor().subscribe(doctor =>
      {if(doctor) this.doctor=doctor;console.log("le vendeur "+this.doctor.nom+" est connecté");});
  }


  ngOnInit(): void {
    this.getCurrentDoctor()
  }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.goToPatientList();
  }, 
  error => console.log(error));
}
  goToPatientList() {
    this.router.navigate(['/docdash/' + this.doctor.id]);
    

  }

  onSubmit() {
    console.log(this.patient);
    this.savePatient();
  }

}
