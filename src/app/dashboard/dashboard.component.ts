import { Component, OnInit, HostListener } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cols: number;

  constructor(private responsive : ResponsiveService) { }
 

  ngOnInit() {
    this.cols = this.responsive.getNbCols();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.cols = this.responsive.getNbCols();
  }

}
