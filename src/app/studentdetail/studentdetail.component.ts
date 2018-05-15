import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student/student';
import { Batch } from '../batch/batch';
import { BatchService } from '../batch/batch.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  heading = 'The student details are : ';
  student: Student
  batchEnrolled: Batch[]
  allBatches: Batch[]
  batchList: Batch[]
  id = +this.route.snapshot.paramMap.get('id')
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router, private batchService: BatchService) {
    this.batchList = [];
  }

  ngOnInit() {
    this.studentService.getStudentById(this.id)
      .subscribe((student: Student) => {
        this.student = student;
      })

    this.batchService.getAllBatches()
      .subscribe((batches: Batch[]) => {
        this.allBatches = batches;
        
        this.studentService.getBatchesNotEnrolled(this.id)
          .subscribe((batches: Batch[]) => {
            this.batchEnrolled = batches
            
            // for (let i = 0; i < this.allBatches.length; i++) {
            //   for(let j=0;j<this.batchEnrolled.length;j++){
            //   if (this.allBatches) {
            //     continue;
            //   } else {
            //     this.batchList.push(this.allBatches[i]);
            //   }
            // }
            // }
            this.batchList = this.allBatches
          })
      })
  }
  onBack() {
    this.router.navigate(['/students'])
  }
  enrollStudent(batchId) {
    this.studentService.enrollStudent(this.id, batchId)
  }

}
