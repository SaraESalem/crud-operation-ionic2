/**
 * Created by sara on 19/08/16.
 */
import { Injectable } from '@angular/core';

import { Students } from '../home/students';
import { STUDENTS } from '../home/mock-students';

@Injectable()

export class StudentService {

    students: Students[] = STUDENTS;

    lastId: number = Math.max.apply(null, this.students.map(item => item.id));
    constructor (){

    }
    getAllStudents(): Students[]{
        return this.students;
    }

    deleteStudentById(id: number): StudentService{
        this.students
            .filter(student => student.id !== id);
        return this;
    }

    addStudent(student: Students): StudentService {
        if (!student.id) {
            student.id = ++this.lastId;
        }
        this.students.push(student);
        return this;
    }
    editStudentById(values: Object = {}) {
        Object.assign( values);
    }

    getStudentById(id: number): Students {
        return this.students
            .filter(student => student.id === id)
            .pop();
    }

}
