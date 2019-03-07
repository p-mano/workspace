import { Component, OnInit } from '@angular/core';
import {student} from './student'; //student object imported
import {STUDENTS} from './studentmock'; // student array of object imported

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  students = STUDENTS;
  selectedstudent: student;
  student:student={id:0,name:"",subject:"",class:'',schoolname:''};

  addStudent(){
   
    var item={
      id:this.students.length+1,
      name:this.student.name,
      class:this.student.class,
      subject:this.student.subject,
      schoolname:this.student.schoolname
    }
    this.students.push(item);
    localStorage.setItem('students',JSON.stringify(this.students));
}
removeStudent(num){
var studentList:student[]=[];
for (var i=0;i<this.students.length;i++)
{
if(this.students[i].id!=num)
{
  studentList.push(this.students[i]);
}  
}
this.students = JSON.parse(localStorage.getItem('students'));
  	this.students.pop()
this.students=studentList;

  	//updating localstorage
  	localStorage.setItem('students',JSON.stringify(this.students));
}
clearItems(){
  //delete all
  localStorage.setItem('students','[]');
}
getItems(){
  this.students = JSON.parse(localStorage.getItem('students'));

  console.log("iam good")
}
close(this){
  this.students.splice(this.student,1)
}
  constructor() { }

  ngOnInit() {
  }
  onSelect(student: student): void {
    this.selectedstudent = student;
  }
 
}

