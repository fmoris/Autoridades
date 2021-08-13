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

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
    this.rowHeight = this.breakpoint === 1 ? '1: 1.3' : '1:1.4'
  }

  onResize(event: any) {
    console.log(event, this.breakpoint);
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
    this.rowHeight = this.breakpoint === 1 ? '1: 1.3' : '1:1.4'
  }
}
