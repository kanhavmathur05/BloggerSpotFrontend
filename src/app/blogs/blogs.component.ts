import { Component, OnInit } from '@angular/core';
import { BlogpostsService } from '../blogposts.service'
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private blogPostsService:BlogpostsService,private router:Router) { }
  blogpost:any={};
  userdetail:any={};
  addBlogPost(blogpost):void
  {
    console.log(this.blogpost);
    this.blogpost
    this.blogPostsService.addBlogPost(this.blogpost).subscribe(
      (data)=>{
        this.blogpost=data;
        console.log(data),
        window.location.reload();
        this.router.navigate(['register'])},
        (error)=>console.log(error.status)
    );
    console.log("Blog Post Added");
  }
  ngOnInit() {
  }

}
