import { useState } from 'react';
import Intro from './components/Intro';
import Output from './components/Output';
import Form from './components/Form';

function App() {
  const [guess, setGuess] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [attempts, setAttempts] = useState(4);

  function handleSubmit(e) {
    e.preventDefault();
    setGuess(inputValue.toUpperCase());

    setAttempts(attempts - 1);
    console.log(attempts);

    setInputValue('');
  }

  return (
    <main className='game-container'>
      <Intro />
      <Output guess={guess} attempts={attempts} />
      <Form
        onSubmit={handleSubmit}
        inputValue={inputValue}
        onSetInputValue={setInputValue}
      />
    </main>
  );
}

export default App;
