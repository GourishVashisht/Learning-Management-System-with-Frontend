import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch/batch.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.css']
})
export class AddbatchComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id')
  constructor(private router:Router, private batchService: BatchService, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  submit(name){
    console.log(this.id);
    this.batchService.addBatch(name,this.id)
  }

  onBack() {
    this.router.navigate(['/batches'])
  }

}
