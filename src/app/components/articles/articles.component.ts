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
  @Input() loadingItem: number;
  @Input() typeList: string;
  default_article: string = 'assets/articleEmpty.png';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public articleService: ArticleService
  ) {}

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
  ngOnInit() {
    console.log(this.articles);
    this.articleService.loading = true;
  }
  pageChanged(event) {
    this.articleService.loading = true;
    this.page = event;
    switch (this.typeList) {
      case "home":
        this.router.navigateByUrl(`/page/${this.page}`);
        break;
      case "category":
        let categoryName = this.route.snapshot.paramMap.get("name");
        let categoryId = this.route.snapshot.paramMap.get("id");
        this.router.navigateByUrl(`/category/${categoryName}/${categoryId}/page/${this.page}`);
        break;
      default:
        break;
    }
    this.router.navigateByUrl(`/page/${this.page}`);
  }
}
