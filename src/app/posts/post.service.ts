import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {
    // posts:Post[] =[];
    posts1: BehaviorSubject<Post[]> = new BehaviorSubject([]);
    constructor(private http: HttpClient) { }
    // post=new  Subject<Post>();
    post = new BehaviorSubject(new Post);

    configUrl = 'http://54.198.226.103:4500/api/posts';

    save(post: Post) {
        // this.posts1.next(this.posts1.getValue().concat([post]));
        let body = JSON.parse(JSON.stringify(post));
        let httpHeaders = new HttpHeaders();
        httpHeaders.append("Content-Type", "application/json")
        let options = {
            headers: httpHeaders
        }
        if (post._id) {
            return this.http.put(this.configUrl + "/" + post._id, body, options)
        } else {
            return this.http.post(this.configUrl, body, options)
        }
        
    }

    getPostList(): Observable<Post[]> {
        return this.posts1.asObservable();
        // this.http.get<Post[]>(this.configUrl)
    }

    deletePost(post: Post) {
         return this.http.delete(this.configUrl + "/" + post._id);
    }

    getPostObject() {
        return this.post
    }

    setPostObject(post: Post) {
        this.post.next(post);
    }

    getPostListFromDb(){
     this.http.get<Post[]>(this.configUrl).subscribe(postData => {         
            this.posts1.next(   JSON.parse(JSON.stringify( postData['posts'])))
      });
    }

}