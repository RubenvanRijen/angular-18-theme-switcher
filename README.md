# Angular 18 Theme Switcher

This project, generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1, introduces a dynamic theme switching feature, allowing users to select between multiple themes, including light and dark modes.

## Getting Started

### Development Server

- **Command**: `ng serve`
- **Purpose**: Launches a development server.
- **Access**: Navigate to `http://localhost:4200/`.
- **Note**: The application automatically reloads upon source file changes.

### Code Scaffolding

- **Command**: `ng generate component <component-name>` or other generators (`directive`, `pipe`, `service`, `class`, `guard`, `interface`, `enum`, `module`).
- **Purpose**: Generates new Angular elements.

### Build

- **Command**: `ng build`
- **Purpose**: Builds the project for production.
- **Output**: Build artifacts are stored in the [`dist/`](command:\_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fclegd%2FDocuments%2FCoding%2Fangular-18-theme-switcher%2Fdist%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\clegd\Documents\Coding\angular-18-theme-switcher\dist\") directory.

### Testing

- **Unit Tests**: Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).
- **End-to-End Tests**: Run `ng e2e` to execute end-to-end tests. Requires a prior setup of an end-to-end testing package.

### Additional Help

For more commands and their explanations, use [`ng help`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fclegd%2FDocuments%2FCoding%2Fangular-18-theme-switcher%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A24%2C%22character%22%3A0%7D%5D 'README.md') or visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Theme Switching Feature

### Toggle Theme Switcher

Allows easy switching between light and dark themes.

#### Usage

1. **Locate the Toggle**: Found typically in the application's header or as introduced on the theme route.
2. **Switch Themes**: Click the toggle to switch themes instantly.

#### Mechanism

Switches the application's theme by toggling a class on the root element, which in turn applies different CSS variables defined for each theme.

### Multi-Theme Switcher

Enables selection from multiple themes beyond light and dark.

#### Usage

1. **Access Theme Selection**: Usually through a dropdown in the application's header or as introduced on the theme-multiple route.
2. **Select a Theme**: Choose and apply your desired theme instantly.

#### Mechanism

Applies a specific class to the root element based on the selected theme, with each class corresponding to a set of CSS variables for that theme's colors and styles.

## Customizing Themes

1. **Define CSS Variables**: Specify variables for each theme's colors and styles.
2. **Create Theme Classes**: Add a class for each theme in the stylesheet using the defined variables.
3. **Update Theme Switcher Logic**: Adjust the theme switcher component to recognize and apply new theme classes based on user selection.

Example:

```scss
// _newTheme-theme.scss
$themeName-theme: (
  bgColor: color,
  textColor: color,
  borderColor: color,
);

// theme.scss
$themes: (
  lightTheme: $light-theme,
  darkTheme: $dark-theme,
  blueTheme: $blue-theme,
  themeNameTheme: $themeName-theme,
);

html.newTheme {
  @include apply-theme('themeNameTheme');
}
```

## Persistence

The application saves the user's theme preference in the browser's localStorage, ensuring the chosen theme persists across sessions. Upon loading, the application checks for a saved theme preference and applies it automatically.

For more details on implementation, refer to the `theme-switcher.service.ts` for logic, `theme.scss` for theme definitions, and the component files for UI elements related to theme switching.
