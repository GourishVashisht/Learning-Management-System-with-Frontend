import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Batch } from './batch';
import { Student } from '../student/student';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  private BASE_URL_BATCH = 'https://infinite-brook-93897.herokuapp.com/batches';
  private BASE_URL_COURSE = 'https://infinite-brook-93897.herokuapp.com/courses';

  constructor(private http: HttpClient) {

  }

  getAllBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.BASE_URL_BATCH);
  }

  addBatch(name, id) {
    this.http.post(this.BASE_URL_COURSE + '/' + id + '/batches', {
      name: name,
      courseId: id
    })
      .subscribe((batch) => [
        alert('Batch ' + name + ' added to the list sucessfully !')
      ])
  }

  getStudentsOfBatch(cid, bid): Observable<Student[]> {
    return this.http.get<Student[]>(this.BASE_URL_BATCH + '/' + bid + '/students')
  }

}
