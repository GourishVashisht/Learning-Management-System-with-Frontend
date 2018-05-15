import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';
import { Router } from '@angular/router';
import { SubjectService } from '../subject/subject.service';
import { Subject } from '../subject/subject';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  heading = 'Our Talented Teachers are as Follows :';
  teacherList: Teacher[]

  constructor(private teacherService: TeacherService, private router: Router) {
    this.teacherList = []
  }

  ngOnInit() {
    this.teacherService.getAllTeachers()
      .subscribe((teachers) => {
        this.teacherList = teachers
        console.log(JSON.stringify(this.teacherList));
      })
  }

  onBack() {
    this.router.navigate(['/batches'])
  }
}
