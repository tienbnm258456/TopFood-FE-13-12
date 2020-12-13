import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/entity/Category';
import { Supplier } from 'src/app/entity/Supplier';
import { SupplierService } from 'src/app/service/supplier/supplier.service';

@Component({
  selector: 'app-supplier-manager',
  templateUrl: './supplier-manager.component.html',
  styleUrls: ['./supplier-manager.component.scss']
})
export class SupplierManagerComponent implements OnInit {

  
  suppliers: Supplier[] ;

  constructor(private supplierService: SupplierService) { }
     deleteError = "";
     display = "none";
    supplierId: number;
  ngOnInit(): void {
    this.getSupplier();
  }

  getSupplier() {
    this.supplierService.getAll().subscribe(data => {
      console.log(data);
      this.suppliers = data;
    })
  }
  delete(id: number) {
    this.supplierId = id;
  }

  checkDelete(){
    this.supplierService.removeSupplier(this.supplierId)
      .subscribe(
        data => {
          console.log(data);
          this.getSupplier();
        },
        error => {
          console.log(error);
          if(error.status == 406) {
           this.deleteError = "cannot delete, because ..."; 
            this.openModal();
          }
        }
      )
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
