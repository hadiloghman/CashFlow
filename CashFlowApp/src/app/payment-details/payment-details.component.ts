import { Component, OnInit } from '@angular/core';
import { ServiceAccountingYear } from '../shared/accountingYear.service';
import { CFAccountingYear } from '../shared/AccountingYear.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {
  constructor(public service: ServiceAccountingYear, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: CFAccountingYear) {
    console.log(selectedRecord);
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('آیا از حذف رکورد اطمینان دارید؟')) {
      this.service.deleteCFAccountingYear(id).subscribe(
        {
          next: res => {
            this.service.list = res as CFAccountingYear[];
            this.toastr.error('رکورد حذف شد', 'حذف رکورد');
          }
          ,
          error: err => { console.log(err); }
        });
    }
  }
}
