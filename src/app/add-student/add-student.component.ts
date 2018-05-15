import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private router:Router, private studentService: StudentService) { }

  ngOnInit() {
  }
  submit(name){
    this.studentService.addStudent(name)
  }

  onBack() {
    this.router.navigate(['/students'])
  }

}
