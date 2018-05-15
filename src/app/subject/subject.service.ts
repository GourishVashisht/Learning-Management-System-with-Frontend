import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  private BASE_URL = 'https://infinite-brook-93897.herokuapp.com/subjects';

  constructor(private http: HttpClient) { }
  
  getAllSubjects():Observable<Subject[]>{
    return this.http.get<Subject[]>(this.BASE_URL)
  }

  addSubject(name){
    this.http.post(this.BASE_URL, {
      subjectName: name
    })
      .subscribe(() => {
        alert('Subject added to the list successfully !');
      })
  }
}
