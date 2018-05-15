import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Batch } from '../batch/batch';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private BASE_URL = 'https://infinite-brook-93897.herokuapp.com/students';
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.BASE_URL);
  }

  addStudent(name) {
    this.http.post(this.BASE_URL, {
      studentName: name
    })
      .subscribe(() => {
        alert('Student added to the list successfully !');
      })
  }

  getStudentById(id): Observable<Student> {
    return this.http.get<Student>(this.BASE_URL + '/' + id)
  }
  enrollStudent(id, batchId) {
    this.http.post<Student>(this.BASE_URL + '/' + id + '/batches', {
      batchId: batchId
    })
      .subscribe((student: Student) => {
        alert('Student ' + id + ' assigned a batch');
      })
  }
  getBatchesNotEnrolled(id):Observable<Batch[]>{
    return this.http.get<Batch[]>(this.BASE_URL+'/'+id+'/batches');
  }
}
