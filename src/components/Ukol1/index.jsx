import { useState } from 'react';

// Zadání: Přidejte na prvek `input` událost `onChange`, která bude do stavu `login` ukládat aktuální hodnotu, kterou uživatel do inputu napíše.

export const Ukol1 = () => {
  const [login, setLogin] = useState('petr');
  console.log(login);
  return (
    <>
      <h1>Úkol 1</h1>
      <label>
        Login:
        <input onChange={(e) => setLogin(e.target.value)} type="text" />
      </label>
    </>
  );
};
