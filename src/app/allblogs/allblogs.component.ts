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

  approvedBlogsOnly:String="A";
  allBlogs:String="All";

  approvedBlogs:BlogPost[];
  approvedBlog:BlogPost;

  admin:boolean;
  constructor(private blogPostService:BlogpostsService,private router:Router) { 
  }

  approveBlog(id:number):any
  {
    console.log("Blog's ID::::::::::::::::"+id);  
    this.blogPostService.approveBlog(id).subscribe(blog=>this.blog=blog); 
    console.log(sessionStorage);
  // this.router.navigate(['blogs/getallblogs']);
    window.location.reload();
  }

  rejectBlog(id:number):any
  {
    console.log("Blog;s ID:::::::::::"+id);
    this.blogPostService.rejectBlog(id).subscribe(blog=>this.blog=blog);
    window.location.reload();
  }

  deleteBlog(id:number):any
  {
    console.log("Blog;s ID:::::::::::"+id);
    this.blogPostService.deleteBlog(id).subscribe(blog=>this.blog=blog);
    window.location.reload();
  }

  ngOnInit() {
    //    console.log(this.blogPostService.getAllBlogPosts().subscribe(blogs=>this.blogs=blogs));
   // console.log(this.blogs);  
    //console.log(this.blogPostService.getAllBlogPosts().subscribe(blogs=>this.blogs=blogs));
    if(JSON.parse(sessionStorage.getItem("userdetail")).role=="ROLE_ADMIN")
    {
     // this.blogPostService.getAllBlogPosts().subscribe(blogs=>this.blogs=blogs);
     this.blogPostService.getAllBlogPosts(this.allBlogs).subscribe(blogs=>this.blogs=blogs);
     this.admin=true;
    }
    else
    {
     // this.blogPostService.getApprovedBlogPosts().subscribe(approvedBlogs=>this.approvedBlogs=approvedBlogs);
     this.blogPostService.getAllBlogPosts(this.approvedBlogsOnly).subscribe(blogs=>this.blogs=blogs);
     this.admin=false;
    }
  }

}
