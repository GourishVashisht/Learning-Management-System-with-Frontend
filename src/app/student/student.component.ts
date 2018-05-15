import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { Router } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  heading='The following students are enroled with us : ';
  studentList:Student[]
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.studentService.getAllStudents()
    .subscribe((students:Student[])=>{
      this.studentList = students
    })
  }
  onBack() {
    this.router.navigate(['/batches'])
  }

}
