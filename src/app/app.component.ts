import { Component, OnInit } from '@angular/core';
import { Autoridades } from './interfaces/autoridades';
import { AutoridadesService } from './services/autoridades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  breakpoint: any;
  rowHeight: any;
  auths: Autoridades[];
  constructor(
    private autoridadesService: AutoridadesService
  ) {
    this.auths = this.autoridadesService.getAutoridades();
  }
  ngOnInit(): void {
    this.breakpoint = this.calulateBreakPoint();
    this.rowHeight = this.breakpoint === 1 ? '1: 1.3' : '1:1.4'
  }

  onResize(event: any) {
    console.log(event.target.innerWidth);
    console.log(this.calulateBreakPoint());
    this.breakpoint = this.calulateBreakPoint();
    this.rowHeight = this.breakpoint === 1 ? '1: 1.3' : '1:1.4'
  }

  calulateBreakPoint(): number {
    let bp: number = 1;
    if (window.innerWidth <= 480) {
      //Mobile devices
      bp = 1
    } else if (window.innerWidth >= 481 && window.innerWidth <= 768) {
      //iPads, Tablets
      bp = 2
    } else if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
      // Small screens, laptops
      bp = 3
    } else if (window.innerWidth >= 1025 && window.innerWidth <= 1200) {
      // Desktops, large screens
      bp = 4
    } else if (window.innerWidth > 1200) {
      // Extra large screens, TV
      bp = 4
    }
    return bp;
  }
}
