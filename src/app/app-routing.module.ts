import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LogoutComponent } from './logout/logout.component';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';

const routes: Routes = [{path:'register',component:RegisterComponent},
                        {path:'',component:LoginComponent},
                        {path:'login',component:LoginComponent},
                        {path:'blogs',component:BlogsComponent},
                        {path:'logout',component:LogoutComponent},
                        {path:'blogs/getallblogs',component:AllblogsComponent},
                        {path:'blogs/getallblogs/:id',component:AllblogsComponent},
                        {path:'jobs',component:JobsComponent},
                        {path:'jobdetails/:id',component:JobdetailsComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
