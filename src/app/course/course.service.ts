import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Course } from './course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private BASE_URL = 'https://infinite-brook-93897.herokuapp.com/courses';
  constructor(private http: HttpClient) { }
  
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.BASE_URL);
  }

  addCourse(name) {
    this.http.post(this.BASE_URL, {
      courseName: name
    })
      .subscribe(() => {
        alert('Course added to the list successfully !');
      })
  }

}
