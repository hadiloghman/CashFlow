import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.development';
import { CFAccountingYear } from './AccountingYear.model';
import { NgForm } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class ServiceAccountingYear {

  url: string = environment.apiBaseUrl + '/AccountingYears'
  list: CFAccountingYear[] = [];
  formData: CFAccountingYear = new CFAccountingYear();
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }

   //this.http.get<any[]>(this.url).subscribe((data) => {this.list = data;})
  refreshList() {
   
    this.http.get(this.url).subscribe({
      next: res => {
        this.list = res as CFAccountingYear[];
      },
      error: err => { console.log(err); }
    })
  }

  postCFAccountingYear() {
    return this.http.post(this.url, this.formData);
  }
  putCFAccountingYear() {
    return this.http.put(this.url + '/' + this.formData.id, this.formData);
  }

  deleteCFAccountingYear(id:number) {
    return this.http.delete(this.url + '/' + id);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new CFAccountingYear();
    this.formSubmitted = false;
  }
} 
