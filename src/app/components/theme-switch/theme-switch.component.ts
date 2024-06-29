import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { MoonIconComponent } from '../icons/moon-icon/moon-icon.component';
import { SunIconComponent } from '../icons/sun-icon/sun-icon.component';
import { Theme } from '../../enums/theme.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
  imports: [CommonModule, MoonIconComponent, SunIconComponent], 
})
export class ThemeSwitchComponent {
  constructor(private themeService: ThemeService) {}
  isDarkTheme: boolean = this.themeService.getTheme() === Theme.Dark;

  switchTheme() {
    this.themeService.toggleTheme();
  }
}
