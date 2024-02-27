import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuItems: MenuItem[] = [
    { label: 'Kitchen', routerLink: 'kitchen' }
  ]
}
