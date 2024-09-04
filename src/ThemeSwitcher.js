// src/ThemeSwitcher.js

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        Mudar para {theme === 'light' ? 'Escuro' : 'Claro'}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
