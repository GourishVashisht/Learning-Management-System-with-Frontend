import { Component, OnInit } from '@angular/core';
import { BatchService } from './batch/batch.service';
import { Batch } from './batch/batch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  schoolName: string = 'Step To Success School';
 
  constructor(private batchService: BatchService) { }

  ngOnInit() {
  }
}
