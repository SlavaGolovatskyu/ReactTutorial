import React from 'react';
import Phrases from './components/Phrases';
import EmplyBlock from './components/EmplyBlock';
import { adjectivesArr, nounsArr } from './array/adjectives_nouns';
import './App.css';

const App = () => {
  const [phrases, setPhrases] = React.useState([]);

  const generatePhrase = () => {
    let firstWord = Math.round(Math.random() * adjectivesArr.length) - 1;
    let secondWord = Math.round(Math.random() * adjectivesArr.length) - 1;
    let nounsWord = Math.round(Math.random() * nounsArr.length) - 1;
    return (
      adjectivesArr[firstWord] +
      ' ' +
      adjectivesArr[secondWord] +
      ' ' +
      nounsArr[nounsWord]
    );
  };

  return (
    <div className="wrapper">
      {phrases.length === 0 ? <EmplyBlock /> : <Phrases phrases={phrases} />}
      <button
        className="btn btn_generate"
        onClick={() => setPhrases([generatePhrase(), ...phrases])}
      >
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={() => setPhrases([])}>
        Очистить
      </button>
    </div>
  );
};

export default App;
