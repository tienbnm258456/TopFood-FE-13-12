import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entity/Category';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {
  
  categorys: Category[];
  constructor(private categoryService: CategoryService) { }
  categoryId: number;
  display = "none";
  isDelete = false;
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.categoryService.getListCategory().subscribe( data=> {
      this.categorys = data;
    })
  }
  delete(id: number) {
    this.categoryId = id;
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  checkDelete(){
    this.categoryService.removeCategory(this.categoryId)
      .subscribe(
        data => {
          this.getAll();
        },
        error => {
          console.log(error);
          if(error.status == 406) {
            this.openModal();
          }
        }
      )
      
  }
}
