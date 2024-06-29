import { Component } from '@angular/core';
import { ThemeSwitchComponent } from "../theme-switch/theme-switch.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [ThemeSwitchComponent]
})
export class NavbarComponent {


  constructor() {}
}
