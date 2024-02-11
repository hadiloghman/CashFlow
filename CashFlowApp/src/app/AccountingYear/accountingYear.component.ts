import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceAccountingYear } from '../shared/accountingYear.service';
import { CFAccountingYear } from '../shared/AccountingYear.model';

//import{} from 'js/jquery.dataTables.min.js';
declare var $: any;

@Component({
  templateUrl: './accountingYear.component.html',

})
export class AccountingYear implements AfterViewInit {
  constructor(public service: ServiceAccountingYear, private toastr: ToastrService, private elem: ElementRef) {
  }
  ngAfterViewInit(): void {
    $('#datatable thead tr')
      .clone(true)
      .addClass('filters')
      .appendTo('#datatable thead');

    $("#datatable").DataTable({
      columnDefs: [
        { target: 0, visible: false, searchable: false },
        { target: 5, visible: false, searchable: false },
        { target: 6, visible: false, searchable: false }],
      orderCellsTop: true,
      fixedHeader: true,
      initComplete: function () {
        var api = this.api();

        // For each column
        api
          .columns()
          .eq(0)
          .each(function (colIdx: number) {
            // Set the header cell to contain the input element
            var cell = $('.filters th').eq(
              $(api.column(colIdx).header()).index()
            );
            var title = $(cell).text();
            $(cell).html('<input type="text" placeholder="' + title + '" />');
            var cursorPosition: number;
            // On every keypress in this input
            $(
              'input',
              $('.filters th').eq($(api.column(colIdx).header()).index())
            )
              //.off('keyup change')
              .on('change', function (e: any) {
                console.log(e.target.parent);
                $(e.target).attr('title', $(e.target).val());
                // Get the search value
                $(e.target).attr('title', $(e.target).val());
                var regexr = '({search})'; //$(this).parents('th').find('select').val();

                cursorPosition = e.target.selectionStart;
                // Search the column for that value
                api
                  .column(colIdx)
                  .search(
                    e.target.value != ''
                      ? regexr.replace('{search}', e.target.value)
                      : '',
                    e.target.value != '',
                    e.target.value == ''
                  )
                  .draw();
              })
            // .on('keyup', function (e: any) {
            //   e.stopPropagation();

            //   $(e.target).trigger('change');
            //   $(e.target)
            //       .focus()[0]
            //       .setSelectionRange(cursorPosition, cursorPosition);
            // });
          });
      },
      ajax: {
        url: 'https://localhost:7268/api/AccountingYears/AccountingYearsTable',
        data: function (d: any) {
        },
        type: "POST"
      },
      columns: [
        { data: 'id' },
        { data: 'rowNumber' },
        { data: 'accYear' },
        { data: 'startDateJalali' },
        { data: 'endDateJalali' },
        { data: 'startDate' },
        { data: 'endDate' }
      ],
      processing: true,
      serverSide: true
    });
  }

  ngOnInit(): void {
    //this.service.refreshList();
  }
}