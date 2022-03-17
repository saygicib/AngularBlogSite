import { Component, OnInit } from '@angular/core';
import { Archive } from 'src/app/models/archive';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-menuarchive',
  templateUrl: './menuarchive.component.html',
  styleUrls: ['./menuarchive.component.css']
})
export class MenuarchiveComponent implements OnInit {

  archives : Archive[]=[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticlesArchive().subscribe(data=>{
      this.archives=data;
    });
  }

}
