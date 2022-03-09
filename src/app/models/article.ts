import { Data } from '@angular/router';
import { Category } from './category';

export class Article {
  id: number;
  title: string;
  contentSummary: string;
  mainContent: string;
  imageUrl: string;
  createdDate: Date;
  updatedDate: Date;
  viewCount: number;
  commentCount: number;
  category: Category;
}
