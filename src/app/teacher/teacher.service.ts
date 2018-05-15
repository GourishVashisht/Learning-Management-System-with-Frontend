import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Teacher } from './teacher';
import { Subject } from '../subject/subject';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private BASE_URL = 'https://infinite-brook-93897.herokuapp.com/teachers';

  constructor(private http: HttpClient) {

  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.BASE_URL);
  }

  addTeacher(teacherName, subjectId) {
    this.http.post(this.BASE_URL, {
      teacherName: teacherName,
      subjectId: subjectId
    })
      .subscribe(() => {
        alert('Teacher added to the list successfully !');
      })
  }

}
