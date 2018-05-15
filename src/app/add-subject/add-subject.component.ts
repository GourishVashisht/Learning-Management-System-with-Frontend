import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../subject/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private router:Router, private subjectService: SubjectService) { }

  ngOnInit() {
  }
  submit(name){
    this.subjectService.addSubject(name)
  }

  onBack() {
    this.router.navigate(['/subjects'])
  }

}
