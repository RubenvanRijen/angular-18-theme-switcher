import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Theme } from '../../enums/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private defaultTheme: Theme = Theme.Light;

  constructor(private cookieService: CookieService) {
    this.loadTheme();
  }

  /**
   * Retrieves the current theme preference.
   * First, it attempts to get the theme from localStorage.
   * If not found, it falls back to cookies.
   * If the theme is not set in either, it defaults to the predefined theme.
   * @returns The current theme ('light' or 'dark').
   */
  getTheme(): Theme {
    const themeFromStorage = localStorage.getItem('theme') as Theme;
    if (themeFromStorage) {
      return themeFromStorage;
    }

    const themeFromCookie = this.cookieService.get('theme') as Theme;
    return themeFromCookie || this.defaultTheme;
  }

  /**
   * Sets the theme preference both in localStorage and cookies.
   * @param theme The theme to set ('light' or 'dark').
   */
  setTheme(theme: Theme): void {
    const currentTheme = this.getTheme();
    document.documentElement.classList.remove(currentTheme);
    localStorage.setItem('theme', theme);
    this.cookieService.set('theme', theme, 365);
    document.documentElement.classList.add(theme);
  }

  /**
   * Toggles the current theme from light to dark or dark to light.
   */
  toggleTheme(): void {
    const newTheme = this.getTheme() === Theme.Light ? Theme.Dark : Theme.Light;
    this.setTheme(newTheme);
  }

  /**
   * Loads the theme from storage or cookies and applies it.
   * This is used to ensure the theme is applied on initial load.
   */
  private loadTheme(): void {
    const currentTheme = this.getTheme();
    this.setTheme(currentTheme);
  }
}
