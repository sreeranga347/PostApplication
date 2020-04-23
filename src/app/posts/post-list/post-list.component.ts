import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { MatTable } from '@angular/material/table';
import { PostCreateComponent } from '../post-create/post-create.component';
import { AlertService } from 'src/app/customeDialog/alert.service';
import { error } from '@angular/compiler/src/util';

@Component({

  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  displayedColumns: string[] = ["id", "title", "content", "actions"];
  // posts: Post[] = [];
  posts: Post[] = [];
  post = new Post();
  userId:string=null;

  constructor(private postService: PostService, private changeDetector: ChangeDetectorRef,private alertService:AlertService) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId");
    this.postService.getPostListFromDb();
    this.getPostList()
  }

  getPostList(): void {
    // this.postService.getPostList().subscribe(postData => {         
    //  this.posts=   JSON.parse(JSON.stringify( postData['posts']))
    // });
    this.postService.getPostList().subscribe(postData => {
      this.posts = postData;
    }
    );
  }

  deletePost(row_obj): void {
    this.post = JSON.parse(JSON.stringify(row_obj));
    this.postService.deletePost(this.post).subscribe(response => 
      {
         this.alertService.openDialog(response['message'])
         this.postService.getPostListFromDb();
        
        },error=>{
          this.alertService.openDialog(error.error.message);
        });
    
  }

  editPost(row_obj): void {
    this.post = JSON.parse(JSON.stringify(row_obj));
    this.postService.setPostObject(this.post);
  }
}
