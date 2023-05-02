import { Doctor } from "./doctor";

export class Appointment {

    id: number;
    name: string;
    age: string;
    symptoms: string;
    number: string;
    doctor : {id: number};


constructor(id: number, name:string, age : string, symptoms: string, number : string, doctor: { id: number }) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.symptoms = symptoms;
    this.number = number;
    this.doctor = this.doctor;
  }

}