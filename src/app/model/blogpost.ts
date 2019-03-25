import { UserDetails } from './userdetails';

export class BlogPost
{
    blogID: number;
    blogTitle: string;
    blogDescription:string;
    postedOn:Date;
    postedBy:UserDetails;
    approved: string;

}