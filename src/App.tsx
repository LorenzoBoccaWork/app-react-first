import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [count, setCount] = useState(0)
  const [color, setColor] = useState('black')
  const [italic, setItalic] = useState(false)
  const [size, setSize] = useState(16)


  const changeColor = () => {
    setColor(color === 'black' ? 'red' : 'black')
  }

  const toggleItalic = () => {
    setItalic(!italic)
  }

  const changeSize = () => {
    setSize(size === 16 ? 20 : 16)
  }

  /*****
  // 1) Creare un arry di ingredienti (5 elementi). Ogni elemento dell'array sarà un oggetto con
  // gli attributi: nome, quant.
  // 2) Visualizzare una lista di ingredienti con il tag UL/LI
  // 3) Aggiungere un input Text per filtrare gli elementi che si chiama "filter". 
  // Aggiungere un elemento bottone che si chiama "Filtra" che al click filtra gli ingredienti
  // in base al testo inserito nell'input.
  // SECONDA VARIANTE
  // 4) Aggiungere un altro filtro sull'onChange della text in modo che a mano a mano che l'utente digita la keywords gli ingredienti sono filtranti senza il bottone "Filtra"
  // Usare 2 tipi di array 
  // */

  type Ingredient = {
    nome: string;
    quantita: number;
    unitaDiMisura: string;
  }

  // 1) Array di ingredienti originale
  const ingredientiOriginali: Ingredient[] = [
    { nome: 'Farina', quantita: 500, unitaDiMisura: 'g' },
    { nome: 'Zucchero', quantita: 200, unitaDiMisura: 'g' },
    { nome: 'Uova', quantita: 3, unitaDiMisura: 'pz' },
    { nome: 'Latte', quantita: 250, unitaDiMisura: 'ml' },
    { nome: 'Burro', quantita: 100, unitaDiMisura: 'g' }
  ];

    // Stati per il filtro con bottone (variante 1)
  const [filter, setFilter] = useState('');
  const [ingredientiFiltrati, setIngredientiFiltrati] = useState<Ingredient[]>(ingredientiOriginali);

  // Stati per il filtro con onChange (variante 2)
  const [filterOnChange, setFilterOnChange] = useState('');


  // Funzione per filtrare con il bottone
  const filtraIngredienti = () => {
    const risultato = ingredientiOriginali.filter(ingrediente => 
      ingrediente.nome.toLowerCase().includes(filter.toLowerCase())
    );
    setIngredientiFiltrati(risultato);
  };

  // Filtra automaticamente durante la digitazione (variante 2)
  const ingredientiFiltatiOnChange = ingredientiOriginali.filter(ingrediente =>
    ingrediente.nome.toLowerCase().includes(filterOnChange.toLowerCase())
  );

 

  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}> Incrementa </button> {/*Stateful component example*/}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={changeColor}>Cambia colore</button>
        <button onClick={toggleItalic}>Stile Italic</button>
        <button onClick={changeSize}>Cambia dimensione</button>
        <p style={{ color, fontStyle: italic ? 'italic' : 'normal', fontSize: `${size}px` }}>
          Cambiami di nuovo!
        </p>
      </div>

      {/* VARIANTE 1: Filtro con bottone */}
      <div className="card" >
        <h2>Variante 1: Filtro con Bottone</h2>
        <div style={{ marginBottom: '1rem' }}>
          <input 
            type="text" 
            placeholder="Cerca ingrediente..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: '0.5rem', marginRight: '0.5rem' }}
          />
          <button onClick={filtraIngredienti}>Filtra</button>
        </div>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          {ingredientiFiltrati.map((ingrediente, index) => (
            <li key={index}>
              {ingrediente.nome} - {ingrediente.quantita} {ingrediente.unitaDiMisura}
            </li>
          ))}
        </ul>
      </div>

      {/* VARIANTE 2: Filtro con onChange */}
      <div className="card">
        <h2>Variante 2: Filtro Automatico (onChange)</h2>
        <div style={{ marginBottom: '1rem' }}>
          <input 
            type="text" 
            placeholder="Cerca ingrediente..."
            value={filterOnChange}
            onChange={(e) => setFilterOnChange(e.target.value)}
            style={{ padding: '0.5rem' }}
          />
        </div>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          {ingredientiFiltatiOnChange.map((ingrediente, index) => (
            <li key={index}>
              {ingrediente.nome} - {ingrediente.quantita} {ingrediente.unitaDiMisura}
            </li>
          ))}
        </ul>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
