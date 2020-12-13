import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/entity/Category';
import { CategoryService } from 'src/app/service/category/category.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  category: Category = new Category();
  form = new FormGroup({
    name: new FormControl('',Validators.required),
  });
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.categoryService.addCategory(this.category).subscribe(data=> {
      this.router.navigateByUrl("/admin/category-manager")
      alert("Them thanh cong Thể Loại");
    });
  }
  get f(){
    return this.form.controls;
  }

  

}
