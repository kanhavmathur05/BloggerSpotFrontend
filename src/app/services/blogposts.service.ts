import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blogpost';
import { UserDetails } from '../model/userdetails';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogpostsService {

  constructor(private http:HttpClient) { }

  //user:UserDetails;

  addBlogPost(blogpost:BlogPost):Observable<BlogPost>
  {
    console.log(blogpost.blogTitle);
    console.log(blogpost.blogDescription);
    console.log(blogpost.postedBy);
    console.log(blogpost.postedOn);
    
    //this.blogpost.postedBy=user;
    //console.log(sessionStorage.getItem("userdetail"+"."+"userName"));

//    blogpost.postedBy=sessionStorage.getItem("userdetail");
    //this.user=JSON.parse(sessionStorage.getItem("userdetail"))
    //blogpost.postedBy=this.user;
    //console.log(this.user);
    console.log(blogpost);
    //sessionStorage.getItem("userdetail");

  
  return this.http.post<BlogPost>('http://localhost:9002/collaborationProjectMiddleware/addBlogPost/',blogpost);
  }

  //Method to get all blog posts
  getAllBlogPosts():Observable<BlogPost[]>
  {
    return this.http.get<BlogPost[]>('http://localhost:9002/collaborationProjectMiddleware/getAllBlogPost/a');
  }


  approveBlog(id:number):Observable<BlogPost>
  {
    console.log("Service Blog ID::::::::::::"+id);
//  console.log("http://localhost:9002/collaborationProjectMiddleware/approveBlogPost/"+{id});
    //console.log(`${id}`);
    return this.http.get<BlogPost>('http://localhost:9002/collaborationProjectMiddleware/approveBlogPost/'+id);
  }

  rejectBlog(id:number):Observable<BlogPost>
  {
    console.log("Service Blog ID::::::::::"+id);
    return this.http.get<BlogPost>('http://localhost:9002/collaborationProjectMiddleware/rejectBlogPost/'+id);
  }

  deleteBlog(id:number):Observable<BlogPost>
  {
    console.log("Service Blog ID:::::::::"+id);
    return this.http.delete<BlogPost>('http://localhost:9002/collaborationProjectMiddleware/deleteBlogPost/'+id);
  }
}
