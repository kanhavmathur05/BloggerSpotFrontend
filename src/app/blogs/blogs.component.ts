import { Component, OnInit, Input } from '@angular/core';
import { BlogpostsService } from '../services/blogposts.service'
import { FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { BlogPost } from '../model/blogpost';
import { UserDetails } from '../model/userdetails';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private blogPostsService:BlogpostsService,private router:Router) { }
//  @Input() blogpost:BlogPost;
    blogpost:any={};
//  userdetail:any={};
  user:UserDetails;
  addBlogPost(blogpost):void
  {
    console.log("Before service method!");
    console.log(this.blogpost);
    console.log("Value from session :: "+sessionStorage.getItem("userdetail"));
    this.user=JSON.parse(sessionStorage.getItem("userdetail"));
    this.blogpost.postedBy=this.user;
   // console.log("User Details:::::",this.userdetail);
    this.blogPostsService.addBlogPost(this.blogpost).subscribe(
      (data)=>{
        this.blogpost=data;
    //    console.log(data),
        sessionStorage.getItem("userdetail");
     //   window.location.reload();
        this.router.navigate(['blogs/getallblogs'])
      },(error)=>{
        return console.log(error.status);
      }
    );
    console.log("After Service Method");
    console.log("Blog Post Added");
  }
  ngOnInit() {
  }

}
