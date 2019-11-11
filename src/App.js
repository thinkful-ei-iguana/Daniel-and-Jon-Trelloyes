import React from 'react';
import Card from './Card.js';
import List from './List.js';
import {STORE} from './store.js';


function App(props) {
  const listElements = props.store.lists.map(list => {
    const cards = list.cardIds.map(id => {
      return props.store.allCards[id]
    } )
    return <List header={list.header} cards={cards} />
  });
  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      {listElements}
    </main>
  );
}
export default App;