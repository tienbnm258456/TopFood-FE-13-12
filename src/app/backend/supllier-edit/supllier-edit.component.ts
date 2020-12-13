import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/entity/Supplier';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SupplierService } from 'src/app/service/supplier/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supllier-edit',
  templateUrl: './supllier-edit.component.html',
  styleUrls: ['./supllier-edit.component.scss']
})
export class SupllierEditComponent implements OnInit {

  supplier: Supplier;
  form = new FormGroup({
    name: new FormControl('',Validators.required),
  });
  constructor(private supplierService: SupplierService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.supplierService.getSupplier(param.id).subscribe(data=>{
        this.supplier = data;
      })
    })
  }
  onSubmit(){
    this.supplierService.updateSupplier(this.supplier).subscribe(data=>{
      this.router.navigateByUrl("/admin/supplier-manager");
      alert("Sửa thành công Nhà Cung Cấp");
    })
  }
  get f(){
    return this.form.controls;
  }
}

