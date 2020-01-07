import { Component, OnInit, DoCheck } from '@angular/core';
import { SidebarService } from './sidebar.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck {

  public sideStyle;


  constructor(
    private s_style: SidebarService,
  ) { }
  ngOnInit() {
  }

  ngDoCheck() {
    this.sideStyle = this.s_style.displayStyles;
  }

  sideClose() {
    this.s_style.displayStyles = 'sideOffStyle';
  }

}
