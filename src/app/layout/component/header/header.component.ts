import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
})



export class HeaderComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	public printResult(){
    var data = document.getElementById('print-reports');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 300;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF(); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('result-of-iGOAL-Rubric.pdf'); // Generated PDF
    });
  }
}
