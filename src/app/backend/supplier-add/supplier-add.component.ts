import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/entity/Supplier';
import { SupplierService } from 'src/app/service/supplier/supplier.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent implements OnInit {

  supplier: Supplier = new Supplier();
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    
  });
  constructor(private categoryService: SupplierService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.categoryService.addSupplier(this.supplier).subscribe(data=> {
      this.router.navigateByUrl("/admin/supplier-manager")
      alert("Thêm thành công Nhà Cung Cấp");
    })
  }
  get f(){
    return this.form.controls;
  }

}
