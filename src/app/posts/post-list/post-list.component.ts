import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  ngOnInit(){
    this.posts=this.postsService.getPosts();
    this.postsService.getPostUpdateListener().subscribe((posts:Post[])=>{
      this.posts=posts;

    })
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
