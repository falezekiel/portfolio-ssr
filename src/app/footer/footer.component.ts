import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: any = ''
  constructor(private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.year = this.getCurrentYear();
  }

  getCurrentYear(): number {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy')!;
    return parseInt(formattedDate, 10);
  }

}
