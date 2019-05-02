import { Component, OnInit } from '@angular/core';
import { job } from '../model/job';
import { Router, Routes } from '@angular/router';
import { JobsserviceService } from '../services/jobsservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {
  jobdetails:job;
  id:number;
  admin:boolean=false;
  notApplied:boolean;
  constructor(private jobsService:JobsserviceService,private router:Router,private _ActivatedRoute:ActivatedRoute) { 
  }

/*  showDetails(id:number)
  {
//    this.jobsService.getJobDetails(id).subscribe(jobdetails=>this.jobdetails=jobdetails);
//    this.router.navigate(['jobdetails']);
  }
*/

applyForJob(id:number)
{
  console.log("In apply job methode");
  this.jobsService.applyForJob(id).subscribe(jobdetails=>this.jobdetails=jobdetails);
  window.location.reload();
}

  ngOnInit() {
    this._ActivatedRoute.params.subscribe(params=>this.id=params['id']);

    this.jobsService.checkIfApplied(this.id).subscribe(notApplied=>this.notApplied=notApplied);
    console.log(this._ActivatedRoute.params.subscribe(params=>this.id=params['id']));
    console.log(this.jobsService.getJobDetails(this.id).subscribe(jobdetails=>this.jobdetails=jobdetails));
    
    console.log(this.jobsService.checkIfApplied(this.id).subscribe(notApplied=>this.notApplied=notApplied));

    console.log(this.notApplied);

    if(JSON.parse(sessionStorage.getItem("userdetail")).role=="ROLE_ADMIN")
    {
     this.admin=true;
    }
    else
    {
     this.admin=false;
    }
  }

}
