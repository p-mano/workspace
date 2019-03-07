import { Component, OnInit } from '@angular/core';
import {student} from '../dashboard/student'; //student object imported
import {STUDENTS} from '../dashboard/studentmock'; // student array of object imported

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;
  selectedstudent: student;
  student:student={id:0,name:"",subject:"",class:'',schoolname:''};

  constructor() { }

  ngOnInit() {
  }

}
