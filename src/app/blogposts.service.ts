import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './model/blogpost';
import { UserDetails } from './model/userdetails';

@Injectable({
  providedIn: 'root'
})
export class BlogpostsService {

  constructor(private http:HttpClient) { }

  user:UserDetails;

  addBlogPost(blogpost:BlogPost):Observable<BlogPost>
  {
    console.log(blogpost.blogTitle);
    console.log(blogpost.blogDescription);
    console.log(blogpost.postedBy);
    console.log(blogpost.postedOn);
    //this.blogpost.postedBy=user;
    //console.log(sessionStorage.getItem("userdetail"+"."+"userName"));

//    blogpost.postedBy=sessionStorage.getItem("userdetail");
    this.user=JSON.parse(sessionStorage.getItem("userdetail"))
    blogpost.postedBy=this.user;
    console.log(this.user);
  return this.http.post<BlogPost>('http://localhost:9002/collaborationProjectMiddleware/addBlogPost/',blogpost);
  }
}
