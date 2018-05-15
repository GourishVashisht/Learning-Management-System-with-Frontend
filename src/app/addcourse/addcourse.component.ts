import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private router:Router, private courseService: CourseService) { }

  ngOnInit() {
  }
  submit(name){
    this.courseService.addCourse(name)
  }

  onBack() {
    this.router.navigate(['/courses'])
  }

}
