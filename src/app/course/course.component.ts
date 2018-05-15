import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  heading='We provide the following courses : ';
  courseList:Course[]
  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.courseService.getAllCourses()
    .subscribe((course:Course[])=>{
      this.courseList = course
    })
  }
  onBack() {
    this.router.navigate(['/batches'])
  }

  addBatch(id) {
    
    
  }
}
