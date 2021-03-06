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
  diputados: Autoridades[];
  regionalGob: Autoridades[];
  concejales: Autoridades[];
  constructor(
    private autoridadesService: AutoridadesService
  ) {
    this.diputados = this.autoridadesService.getAutoridades().filter(dip => {
      return dip.CARGO === 'Diputado';
    }).map(d => {
      return {
        ...d,
        errorImage: d.PEV === 'PEV' ? '../assets/fondo_sin_foto_pev.png' : '../assets/fondo_sin_foto_ind.png',
        image: 'http://autoridades.ecologistas.cl/fotos_autoridades/' + d.N + '.png'
      }
    });
    
    this.regionalGob = this.autoridadesService.getAutoridades().filter(dip => {
      return dip.CARGO === 'Gobernadora Regional';
    }).map(d => {
      return {
        ...d,
        errorImage: d.PEV === 'PEV' ? '../assets/fondo_sin_foto_pev.png' : '../assets/fondo_sin_foto_ind.png',
        image: 'http://autoridades.ecologistas.cl/fotos_autoridades/' + d.N + '.png'
      }
    });

    this.concejales = this.autoridadesService.getAutoridades().filter(conc => {
      return conc.CARGO === 'Concejalía';
    }).map(d => {
      return {
        ...d,
        errorImage: d.PEV === 'PEV' ? '../assets/fondo_sin_foto_pev.png' : '../assets/fondo_sin_foto_ind.png',
        image: 'http://autoridades.ecologistas.cl/fotos_autoridades/' + d.N + '.png'
      }
    });
  }
  ngOnInit(): void {
    this.breakpoint = this.calulateBreakPoint();
    this.rowHeight = this.breakpoint === 1 ? '1: 1.3' : '1:1.4'
  }

  onResize(event: any) {
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

  onImgError(event:any, auth: Autoridades):any {
    return event.target.src = auth.errorImage
  }
}
