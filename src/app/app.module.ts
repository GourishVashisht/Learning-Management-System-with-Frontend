import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { CourseComponent } from './course/course.component';
import { BatchComponent } from './batch/batch.component';
import { HttpClientModule } from '@angular/common/http';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddbatchComponent } from './addbatch/addbatch.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    SubjectComponent,
    CourseComponent,
    BatchComponent,
    AddteacherComponent,
    AddSubjectComponent,
    AddStudentComponent,
    StudentdetailComponent,
    AddcourseComponent,
    AddbatchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'batches', component: BatchComponent },
      { path: 'students', component: StudentComponent },
      { path: 'students/:id', component: StudentdetailComponent },
      { path: 'teachers', component: TeacherComponent },
      { path: 'addTeacher', component: AddteacherComponent },
      { path: 'addSubject', component: AddSubjectComponent },
      { path: 'addStudent', component: AddStudentComponent },
      { path: 'addCourse', component: AddcourseComponent },
      { path: 'addBatch/:id', component: AddbatchComponent },
      { path: 'subjects', component: SubjectComponent },
      { path: 'courses', component: CourseComponent },
      { path: '', redirectTo: 'batches', pathMatch: 'full' },
      { path: '**', redirectTo: 'batches', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
