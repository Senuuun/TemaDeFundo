// src/App.js

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { FormProvider } from './FormContext'; // Importe o FormProvider
import ThemeSwitcher from './ThemeSwitcher';
import RegistrationForm from './RegistrationForm';
import TaskList from './TaskList';
import Counter from './Counter'; // Importe o Counter

function App() {
  return (
    <ThemeProvider>
      <FormProvider>
        <div className="App">
          <ThemeSwitcher />
          <RegistrationForm />
          <TaskList />
          <Counter /> {/* Adicione o Counter aqui */}
        </div>
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
