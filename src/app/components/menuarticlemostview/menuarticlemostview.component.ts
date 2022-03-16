import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-menuarticlemostview',
  templateUrl: './menuarticlemostview.component.html',
  styleUrls: ['./menuarticlemostview.component.css'],
})
export class MenuarticlemostviewComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticlesByMostView().subscribe(data=>{
      this.articles=data;
    });
  }
}
