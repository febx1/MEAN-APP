import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {
  private postsSub!:Subscription;
  ngOnInit(){
  this.postsService.getPosts();
   this.postsSub= this.postsService.getPostUpdateListener().subscribe((posts:Post[])=>{
      this.posts=posts;

    })
  }
ngOnDestroy() {
  this.postsSub.unsubscribe();
}
  constructor(public postsService:PostsService){

  }
  posts:Post[]=[
  // {title:'First post',content:'this is the first post'},
  // {title:'Second post',content:'this is the first post'},
  // {title:'First post',content:'this is the first post'},
  // {title:'First post',content:'this is the first post'},
  // {title:'First post',content:'this is the first post'},
  // {title:'First post',content:'this is the first post'},
]
}
