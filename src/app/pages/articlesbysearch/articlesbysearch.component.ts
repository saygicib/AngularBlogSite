import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articlesbysearch',
  templateUrl: './articlesbysearch.component.html',
  styleUrls: ['./articlesbysearch.component.css']
})
export class ArticlesbysearchComponent implements OnInit {
  page: number = 1;
  pageSize: number = 5;
  articles: Article[];
  totalCount: number;
  loadingItem:number=5;
  ajax;
searchText:string;
  constructor(private route:ActivatedRoute,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.route.url.subscribe(x=>{
      if(this.ajax!=null){
        this.ajax.unsubscribe();
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
      this.articles=[];
      this.totalCount=0;
      this.articleService.loading=true;
      if(this.route.snapshot.paramMap.get("page")){
        this.page = Number(this.route.snapshot.paramMap.get("page"))
      }
      this.searchText = this.route.snapshot.queryParamMap.get("s");

      this.articleService.getArticleBySearchText(this.searchText,this.page,this.pageSize).subscribe(data=>{
        this.articles=data.articleGetDtos;
        this.totalCount =data.totalCount;
      })
    });
  }

}
