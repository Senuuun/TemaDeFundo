import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormContext } from './FormContext';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { updateFormData } = useContext(FormContext); // Use o FormContext
  const [confirmationMessage, setConfirmationMessage] = React.useState('');

  const onSubmit = (data) => {
    updateFormData(data); // Atualiza os dados do formulário no contexto
    console.log(data);
    setConfirmationMessage('Registro realizado com sucesso!');
  };

  return (
    <div>
      <h2>Formulário de Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            {...register('name', { required: 'O nome é obrigatório' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'O e-mail é obrigatório',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Formato de e-mail inválido'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            {...register('password', { 
              required: 'A senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter pelo menos 6 caracteres'
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Registrar</button>
      </form>

      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
}

export default RegistrationForm;
