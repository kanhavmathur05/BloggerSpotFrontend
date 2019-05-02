import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsserviceService } from '../services/jobsservice.service';
import { job } from '../model/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private jobsService:JobsserviceService,private router:Router) { }
  job:any={};
  jobs:job[];

  admin:boolean;
  ngOnInit() {
  
    this.jobsService.getAllJobs().subscribe(jobs=>this.jobs=jobs);
 
    if(JSON.parse(sessionStorage.getItem("userdetail")).role=="ROLE_ADMIN")
    {
     this.admin=true;
    }
    else
    {
     this.admin=false;
    }
  }
  addJob(job):void
  {
    this.jobsService.addJob(this.job).subscribe(
      (data)=>{
        this.job=data;
        console.log(data);
        this.router.navigate(['jobs']);
        window.location.reload();
      },(error)=>{
        return console.log(error.status);
      }
    );
  }

 
  deleteJob(id:number):void
  {
    console.log(id);
    this.jobsService.deleteJob(id).subscribe(job=>this.job=job);
    window.location.reload();
  }
}
