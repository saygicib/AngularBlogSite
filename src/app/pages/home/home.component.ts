import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit,OnDestroy {
  page: number = 1;
  pageSize: number = 5;
  articles: Article[];
  totalCount: number;
  loadingItem:number=5;
  ajax;
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((x) => {
      if (x.get('page')) {
        this.page = Number(x.get('page'));
      }
      if(this.totalCount>0)
      {
        if(this.totalCount>=this.page*this.pageSize){
          this.loadingItem=5;
        }
        else{
          this.loadingItem=this.totalCount-(this.page-1)*this.pageSize
        }
      }
      this.articles = [];
      this.totalCount = 0;
      this.ajax = this.articleService
        .getArticles(this.page, this.pageSize)
        .subscribe((data) => {
          this.articles = data.articleGetDtos;
          this.totalCount = data.totalCount;
        });
    });
  }
  ngOnDestroy(): void {
    if(this.ajax!=null){
      this.ajax.unsubscribe();
    }
  }

  ngOnInit(): void {

  }
}
