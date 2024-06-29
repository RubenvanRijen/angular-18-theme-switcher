import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { Theme } from '../../enums/theme.enum';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss',
})
export class ThemeSelectorComponent {
  constructor(private themeService: ThemeService) {}
  currentTheme: Theme = this.themeService.getTheme();
  themes: Theme[] = Object.values(Theme).filter(value => typeof value === 'string');

  changeTheme(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const theme = selectElement.value as Theme;
    this.themeService.setTheme(theme);
  }
}
