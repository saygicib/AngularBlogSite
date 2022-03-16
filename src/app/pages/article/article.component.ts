import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:Article;
  category:Category;
  ajax;
  constructor(public articleService : ArticleService,private router:Router,private route :ActivatedRoute,) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(x=>{
      if(this.ajax!=null){
        this.ajax.unsubscribe();
      }
      this.articleService.loading=true;
      let id =Number(this.route.snapshot.paramMap.get("id"));//(snapshot)anlık url'i alıyor. Onun üzerinden de id'yi alıyoruz.
      this.ajax = this.articleService.getArticle(id).subscribe(data=>{
        this.article=data;
        this.category=data.category;
      });
    });
  }
}
