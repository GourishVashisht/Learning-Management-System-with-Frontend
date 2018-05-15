import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from './subject.service';
import { Subject } from './subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  heading = 'WE teach these subjects : ';
  subjectList:Subject[]
  constructor(private router:Router, private subjectService:SubjectService) { }

  ngOnInit() {
    this.subjectService.getAllSubjects()
    .subscribe((subjects:Subject[])=>{
      this.subjectList = subjects
    })
  }

  onBack(){
    this.router.navigate(['/batches'])
  }

}
