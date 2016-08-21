/**
 * Created by sara on 21/08/16.
 */
import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Students } from '../home/students';
import { StudentService } from '../services/student.service';
import { HomePage } from '../home/home';

@Component({
    templateUrl: 'build/pages/modals/modal-content.html',
    providers: [StudentService]

})
export class ModalPage{
    type;
    levels = ['primary','secondary','preparatory'];
    newStudent: Students = new Students();
    editnewStudent: Students = new Students();

    constructor(public studentservice: StudentService,
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    )  {
        
        this.type =this.params.get('type');
        this.editnewStudent =this.params.get('stud');
        

    }
    editNow(){
        this.studentservice.editStudentById(this.editnewStudent);
        this.editnewStudent = new Students(); //to empty this object
        this.viewCtrl.dismiss();
    }
    addNow() {
        this.studentservice.addStudent(this.newStudent);
        this.newStudent = new Students(); //to empty this object
        this.viewCtrl.dismiss();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}


