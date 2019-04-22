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
  
  constructor(private blogPostService:BlogpostsService,private router:Router) { 
  }

  approveBlog(id:number):void
  {
    console.log("Blog's ID::::::::::::::::"+id)
    this.blogPostService.approveBlog(id); 
   // this.router.navigate(['blogs/getallblogs']);
  }
  ngOnInit() {
    this.blogPostService.getAllBlogPosts().subscribe(blogs=>this.blogs=blogs);
    console.log(this.blogPostService.getAllBlogPosts().subscribe(blogs=>this.blogs=blogs));
    console.log(this.blogs);  
    //console.log(this.blogPostService.getAllBlogPosts().subscribe(blogs=>this.blogs=blogs));
  }

}
