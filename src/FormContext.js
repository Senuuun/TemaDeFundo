import React, { createContext, useState, useContext } from 'react';

// Cria o contexto do formulário
export const FormContext = createContext();

// Cria o FormProvider que fornecerá os dados do formulário e funções relacionadas
export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Atualiza os dados do formulário
  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

// Custom Hook para usar o FormContext
export function useFormContext() {
  return useContext(FormContext);
}
