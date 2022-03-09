import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  @Input() totalCount: number;
  @Input() articles: Article[];
  @Input() page: number;
  @Input() pageSize: number;
  default_article:string="assets/articleEmpty.png";
  constructor(private router: Router, private route: ActivatedRoute,public articleService:ArticleService) {}

  ngOnInit() {
  }
  pageChanged(event) {
    this.articleService.loading=true;
    this.page = event;
    this.router.navigateByUrl(`/page/${this.page}`);
  }
}
