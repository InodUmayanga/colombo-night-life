import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Authentication/auth.service';

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.css']
})
export class AdminBarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  admin = false;

  ngOnInit() {
    this.admin = this.authService.getAdminAccess();
  }
}
