import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{BreakpointObserver} from '@angular/cdk/layout'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  @ViewChild(MatSidenav) sidenav !:MatSidenav;
  constructor(private observer :BreakpointObserver){}
  ngAfterViewInit(){
    this.observer.observe(['(max-width : 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
      }else{
        this.sidenav.mode='side';
        this.sidenav.opened='true';
      }
    });
  }
  etat!:string;
  changeretat( _etat : string){
    this.etat=_etat;
  }
  
}
