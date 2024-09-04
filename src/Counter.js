import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Atualiza o título da página sempre que o contador muda
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor atual: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter;