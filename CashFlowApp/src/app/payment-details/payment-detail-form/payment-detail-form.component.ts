import { Component, OnInit, AfterViewInit, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { ServiceAccountingYear } from 'src/app/shared/accountingYear.service';
import { NgForm } from "@angular/forms"
import { CFAccountingYear } from 'src/app/shared/AccountingYear.model';
import { ToastrService } from 'ngx-toastr';
import * as jalaliMoment from 'jalali-moment';

declare var $: any;

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})


export class PaymentDetailFormComponent implements AfterViewInit {
  @ViewChildren('.persianDate') persianCalendarItems!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    let elements = this.elem.nativeElement.querySelectorAll('.persianDate');
    elements.forEach((item: HTMLElement) => {
      //console.log(item.parentElement?.nextElementSibling?.id);
      $('#' + item.id).MdPersianDateTimePicker({
        targetTextSelector: '#' + item.parentElement?.previousElementSibling?.id
      });

    });
  }

  persianDate: string;



  constructor(public service: ServiceAccountingYear, private toastr: ToastrService, private elem: ElementRef) {
    this.persianDate = jalaliMoment().format("YYYY/MM/DD");


  }
  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (!form.valid) {
      return;
    }
    if (this.service.formData.id == 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }

  }

  insertRecord(form: NgForm) {
    this.service.postCFAccountingYear().subscribe(
      {
        next: res => {
          this.service.list = res as CFAccountingYear[];
          this.service.resetForm(form);
          this.toastr.success('Inserted Successfully', 'Payment Detail Register');
        }
        ,
        error: err => { console.log(err); }
      });
  }

  updateRecord(form: NgForm) {
    this.service.putCFAccountingYear().subscribe(
      {
        next: res => {
          this.service.list = res as CFAccountingYear[];
          this.service.resetForm(form);
          this.toastr.info('Updated Successfully', 'Payment Detail Register');
        }
        ,
        error: err => { console.log(err); }
      });
  }
}
