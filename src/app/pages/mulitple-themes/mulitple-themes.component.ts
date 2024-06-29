import { Component } from '@angular/core';
import { ThemeSelectorComponent } from "../../components/theme-selector/theme-selector.component";

@Component({
    selector: 'app-mulitple-themes',
    standalone: true,
    templateUrl: './mulitple-themes.component.html',
    styleUrl: './mulitple-themes.component.scss',
    imports: [ThemeSelectorComponent]
})
export class MulitpleThemesComponent {

}
