import { Component } from '@angular/core';
import { ThemeSwitchComponent } from '../../components/theme-switch/theme-switch.component';
import { ThemeSelectorComponent } from "../../components/theme-selector/theme-selector.component";

@Component({
    selector: 'app-theme',
    standalone: true,
    templateUrl: './theme.component.html',
    styleUrl: './theme.component.scss',
    imports: [ThemeSwitchComponent, ThemeSelectorComponent]
})
export class ThemeComponent {

}
