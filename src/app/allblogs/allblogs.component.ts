import { Component, OnInit } from '@angular/core';
import { BlogpostsService } from '../services/blogposts.service';
import { BlogPost } from '../model/blogpost';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent implements OnInit {

  blogs:BlogPost[];
  blog:BlogPost;
  admin:boolean;
  constructor(private blogPostService:BlogpostsService,private router:Router) { 
  }

  approveBlog(id:number):any
  {
    console.log("Blog's ID::::::::::::::::"+id);  
    this.blogPostService.approveBlog(id).subscribe(blog=>this.blog=blog); 
    console.log(sessionStorage);
  //  this.router.navigate(['blogs/getallblogs']);
  }

  rejectBlog(id:number):any
  {
    console.log("Blog;s ID:::::::::::"+id);
    this.blogPostService.rejectBlog(id).subscribe(blog=>this.blog=blog);
  }

  deleteBlog(id:number):any
  {
    console.log("Blog;s ID:::::::::::"+id);
    this.blogPostService.deleteBlog(id).subscribe(blog=>this.blog=blog);
  }

  ngOnInit() {
    this.blogPostService.getAllBlogPosts().subscribe(blogs=>this.blogs=blogs);
    console.log(this.blogPostService.getAllBlogPosts().subscribe(blogs=>this.blogs=blogs));
    console.log(this.blogs);  
    //console.log(this.blogPostService.getAllBlogPosts().subscribe(blogs=>this.blogs=blogs));
  }

}
