import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlePg } from '../models/article-pg';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  public loading: boolean = true;
  private apiUrl: string = 'http://localhost:44450/api/article';
  getArticles(page: number, pageSize: number) {
    let api = `${this.apiUrl}/${page}/${pageSize}`;
    return this.httpClient.get<any>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  getArticle(id: number) {
    let api = `${this.apiUrl}/${id}`;
    return this.httpClient.get<any>(api).pipe(
      tap((x)=>{
        this.loading=false;
      })
    );
  }
  getArticleByCategoryId(categoryId:number,page: number, pageSize: number){
    let api = `${this.apiUrl}/GetArticlesByCategoryId/${categoryId}/${page}/${pageSize}`;
    return this.httpClient.get<any>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  getArticleBySearchText(searchText:string,page:number,pageSize:number){
    let api = `${this.apiUrl}/GetArticlesBySearchText/${searchText}/${page}/${pageSize}`;
    return this.httpClient.get<any>(api).pipe(
      tap((x)=>{
        this.loading = false;
      })
    )
  }
  getArticlesByMostView(){
    let api=`${this.apiUrl}/GetArticlesByMostView`;
    return this.httpClient.get<any>(api);
  }
}
