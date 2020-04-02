import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class PostService {
    // posts:Post[] =[];
    posts1: BehaviorSubject<Post[]> = new BehaviorSubject([]);
    constructor() { }
    // post=new  Subject<Post>();
    post = new BehaviorSubject(new Post);

    save(post: Post): void {
        this.posts1.next(this.posts1.getValue().concat([post]));
    }

    getPostList(): Observable<Post[]> {
        return this.posts1.asObservable();
    }

    deletePost(post: Post): void {
        let postArray = this.posts1.getValue();
        postArray = postArray.filter((value, key) => {
            return value.id != post.id;
        }
        )
        this.posts1.next(postArray);

    }
   
    getPostObject() {
        return this.post
    }

    setPostObject(post: Post) {
        this.post.next(post);
    }

}