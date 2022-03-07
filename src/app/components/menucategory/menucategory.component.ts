import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-menucategory',
  templateUrl: './menucategory.component.html',
  styleUrls: ['./menucategory.component.css']
})
export class MenucategoryComponent implements OnInit {

  categories:Category[]=[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

}
