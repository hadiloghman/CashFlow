import { Component, OnInit} from '@angular/core';


@Component({
    templateUrl: './accountingYear2.component.html',
  
  })
  export class accountingYear2 implements OnInit {
    dtOptions: DataTables.Settings = {};
  
    ngOnInit(): void {
      this.dtOptions = {
        serverSide: true,     // Set the flag 
        ajax: (dataTablesParameters: any, callback) => {
          that.http
            .post<DataTablesResponse>(
              'https://xtlncifojk.eu07.qoddiapp.com/',
              dataTablesParameters, {}
            ).subscribe(resp => {
              callback({
                recordsTotal: resp.recordsTotal,
                recordsFiltered: resp.recordsFiltered,
                data: resp.data
              });
            });
        },
        columns: [{
          title: 'ID',
          data: 'id'
        }, {
          title: 'First name',
          data: 'firstName'
        }, {
          title: 'Last name',
          data: 'lastName'
        }]
      };
    }
  }