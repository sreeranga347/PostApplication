import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { MatTable } from '@angular/material/table';
import { PostCreateComponent } from '../post-create/post-create.component';

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

  constructor(private postService: PostService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPostList()
  }

  getPostList(): void {
    this.postService.getPostList().subscribe((postData: Post[]) => {
      this.posts = postData
    });
  }

  deletePost(row_obj): void {
    this.post = JSON.parse(JSON.stringify(row_obj));
    this.postService.deletePost(this.post);
  }

  editPost(row_obj): void {
    this.post = JSON.parse(JSON.stringify(row_obj));
    this.postService.setPostObject(this.post);
  }
}
