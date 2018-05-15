import { Component, OnInit } from '@angular/core';
import { BatchService } from './batch.service';
import { Batch } from './batch';
import { Student } from '../student/student';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  heading = 'The following batches are currenctly available : ';
  batchList: Batch[]
  batchName: Batch
  studentsList: Student[]

  constructor(private batchService: BatchService) {
    this.batchList = []
  }

  ngOnInit() {
    this.batchService.getAllBatches()
      .subscribe((batches: Batch[]) => {
        this.batchList = batches;
        console.log(JSON.stringify(this.batchList));
      })
  }

  getEnrolledStudents(cid, bid, name) {
    this.batchName = name
    this.batchService.getStudentsOfBatch(cid, bid)
      .subscribe((students: Student[]) => {
        this.studentsList = students
        console.log(this.studentsList);
      })
  }
}
