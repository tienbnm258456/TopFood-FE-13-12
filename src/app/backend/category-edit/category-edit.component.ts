import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/entity/Category';
import { CategoryService } from 'src/app/service/category/category.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  form = new FormGroup({
    name: new FormControl('',Validators.required),
  });
  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.categoryService.getCategory(param.id).subscribe(data=>{
        this.category = data;
      })
    })
  }
  onSubmit(){
    this.categoryService.updateCategory(this.category).subscribe(data=>{
      this.router.navigateByUrl("/admin/category-manager");
      alert("Sửa thành công Thể Loại");
    })
  }
  get f(){
    return this.form.controls;
  }
}
