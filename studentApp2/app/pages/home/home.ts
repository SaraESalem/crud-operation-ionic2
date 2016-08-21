import { Component,ViewChild} from '@angular/core';
import {ModalController} from 'ionic-angular';
import { Students } from './students';
import { StudentService } from '../services/student.service';
import { ModalPage } from '../modals/modal.page';


@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [StudentService]
})

export class HomePage{
  constructor(public studentservice: StudentService,private modalController : ModalController ) {
    
  }

  get students() {
     return this.studentservice.getAllStudents()
  }
  removeStudent(student:Students) {
     this.studentservice.deleteStudentById(student.id);
  }
  editStudent(student:Students,type) {
    let std = this.studentservice.getStudentById(student.id);
    console.log(std)
    if(std){
      type.stud = std;
      console.log(type)
      //open modal
      this.openModal(type);
    }
  }
 
  openModal(type) {
    console.log("all students in model opens -> ",this.students)
    let modal = this.modalController.create(ModalPage,type);
    modal.present();
  }

 
}
