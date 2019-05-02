import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { job } from '../model/job'
import { UserDetails } from '../model/userdetails';
@Injectable({
  providedIn: 'root'
})
export class JobsserviceService {

  constructor(private http:HttpClient) { }

  addJob(jobDetails:job):Observable<job>
  {
   return this.http.post<job>('http://localhost:9002/collaborationProjectMiddleware/addJob',jobDetails);
  }

  getAllJobs():Observable<job[]>{
    return this.http.get<job[]>('http://localhost:9002/collaborationProjectMiddleware/getAllJobs');
  }

  deleteJob(id:number):Observable<void>
  {
    return this.http.delete<void>('http://localhost:9002/collaborationProjectMiddleware/deleteJob/'+id);
  }

  getJobDetails(id:number):Observable<job>
  {
    return this.http.get<job>('http://localhost:9002/collaborationProjectMiddleware/getJobById/'+id);
  }

  applyForJob(id:number):Observable<job>
  {
    return this.http.post<job>('http://localhost:9002/collaborationProjectMiddleware/applyForJob/'+id,JSON.parse(sessionStorage.getItem("userdetail")).userName);
  }

  checkIfApplied(id:number):Observable<boolean>
  {
    return this.http.post<boolean>('http://localhost:9002/collaborationProjectMiddleware/checkIfApplied/'+id,JSON.parse(sessionStorage.getItem("userdetail")).userName);
  }
}
