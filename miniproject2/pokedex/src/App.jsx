import './App.css';
import React, { Suspense, useState } from 'react';
import TypesBar from './components/TypesBar';
import PokemonsContainer from './components/PokemonsContainer';
import Modal from './components/modal/Modal';
import { PokemonModalProvider } from './context/PokemonModalProvider';
import Loader from './components/Loader';

//imports all neccesarry files to be used by App.js

function App() {
  const [type, setType] = useState('ice');

  return (
    <Suspense fallback={ <Loader /> }>
      <PokemonModalProvider>
          <div className='wrapper'>
            <h1 className='logo-pokemon'>Pokédex</h1>

            <TypesBar toggleType={ setType } />
            <PokemonsContainer type={ type } />
          </div>

          <Modal />
      </PokemonModalProvider>
    </Suspense>
  )
}

//This App component sets up the main structure for the Pokédex application by providing a Pokémon modal context and rendering the primary components (TypesBar, PokemonsContainer, and Modal) inside a Suspense wrapper with a fallback loader, allowing users to filter Pokémon by type using setType.

export default App