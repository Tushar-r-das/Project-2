import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';
import { LoginpatientComponent } from './loginpatient/loginpatient.component';
import { LogoutdoctorComponent } from './logoutdoctor/logoutdoctor.component';
import { HomeComponent } from './home/home.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';

const routes: Routes = 
[{path:'listdoc',component:ListDoctorComponent},
{path:'adddoc',component:AddDoctorComponent},
{path:'updatedoc',component:UpdateDoctorComponent},
{path:'listpatient',component:ListPatientComponent},
{path:'addpatient',component:AddPatientComponent},
{path:'updatepatient',component:UpdatePatientComponent},
{path:'listappointment',component:ListAppointmentComponent},
{path:'addappointment',component:AddAppointmentComponent},
{path:'updateappointment',component:UpdateAppointmentComponent},
{path:'loginpatient',component:LoginpatientComponent},
{path:'logindoc',component:LogindoctorComponent},
{path:'logoutdoc',component:LogoutdoctorComponent},
{path:'home',component:HomeComponent},
{path:'patientprofile',component:PatientprofileComponent},
{path:'doctorprofile',component:DoctorprofileComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }