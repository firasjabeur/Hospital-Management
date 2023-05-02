import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { DocloginComponent } from './doclogin/doclogin.component';

import { DocdashComponent } from './docdash/docdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth-gaurd.service';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { AuthenticationService } from './authentication.service';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';


import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { DocsignupComponent } from './docsignup/docsignup.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: NewsfeedComponent },
  { path: 'doclogin', component: DocloginComponent },
  { path: 'home', component: NewsfeedComponent },
  { path: 'createpatient', component: CreatepatientComponent, },
  { path: 'docdash/:d', component: DocdashComponent, },
  { path: 'updatepatient/:id', component: UpdatePatientComponent,  },
  { path: 'admindash', component: AdmindashComponent,  },
  { path: 'medicinelist', component: MedicineListComponent, },

  { path: 'appointmentlist/:id', component: AppointmentListComponent,},
  { path: 'createappointment', component: CreateAppointmentComponent, },
  { path: 'viewpatient/:id', component: ViewPatientComponent },
  { path: 'signup', component: DocsignupComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    DocloginComponent,

    DocdashComponent,
    AdmindashComponent,
    CreatepatientComponent,
    UpdatePatientComponent,
    MedicineListComponent,


    AppointmentListComponent,
    CreateAppointmentComponent,
    ViewPatientComponent,
    DocsignupComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,CommonModule,ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
