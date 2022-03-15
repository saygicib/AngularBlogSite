import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articlesbycategory',
  templateUrl: './articlesbycategory.component.html',
  styleUrls: ['./articlesbycategory.component.css']
})
export class ArticlesbycategoryComponent implements OnInit {
  page: number = 1;
  pageSize: number = 5;
  articles: Article[];
  totalCount: number;
  loadingItem:number=5;
  ajax;
  categoryId:number;
  constructor(private route:ActivatedRoute,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(x=>{
      if(this.ajax!=null){
        this.ajax.unsubscribe();
      }
      this.articleService.loading=true;
      this.articles=[];
      this.totalCount=0;
      if(x.get("id")){
        this.categoryId=Number(x.get("id"));
      }
      if(x.get("page")){
        this.page = Number(x.get("page"));
      }
      this.ajax = this.articleService.getArticleByCategoryId(this.categoryId,this.page,this.pageSize).subscribe(data=>{
        this.articles=data.articleGetDtos;
        this.totalCount=data.totalCount;
      })
    });
  }

}
