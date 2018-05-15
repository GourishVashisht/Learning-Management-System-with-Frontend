import { Component, OnInit } from '@angular/core';
import { Subject} from '../subject/subject';
import { SubjectService } from '../subject/subject.service';
import { HttpClient } from '@angular/common/http';
import { TeacherService } from '../teacher/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
  subjectList: Subject[]
  constructor(private router:Router, private subjectService: SubjectService, private teacherService:TeacherService) { }

  ngOnInit() {
    this.subjectService.getAllSubjects()
      .subscribe((subjects: Subject[]) => {
        this.subjectList = subjects
        console.log(JSON.stringify(this.subjectList));
      })
  }

  submit(teacherName, subjectId){
    this.teacherService.addTeacher(teacherName, subjectId)
  }

  onBack() {
    this.router.navigate(['/teachers'])
  }
}
