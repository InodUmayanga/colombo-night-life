import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'colombo-night-life';

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    if (screen.width > 500) {
      this.router.navigate(['/desktop']);
    }
  }
}
