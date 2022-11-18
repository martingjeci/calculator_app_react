
import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {

  const [text,setText] = useState('');
  const [result, setResult] = useState('');

  const addToText = (val) => {
    setText((text) => [...text,val+'']);
  };

  const calculateResult = () => {
    const input = text.join('');

    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText('');
    setResult('');
  };

  const buttonColor = '#f2a33d'; 
  console.log(2.5+1);

  return (
    <div className="App">
      <div className='calc-wrapper'>
        <Input text={text} result={result.toString().substring(0,10)}/>
        <div className='row'>
          <Button symbol='7' handleClick={addToText}/>
          <Button symbol='8' handleClick={addToText}/>
          <Button symbol='9' handleClick={addToText}/>
          <Button symbol='/' color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol='4' handleClick={addToText}/>
          <Button symbol='5' handleClick={addToText}/>
          <Button symbol='6' handleClick={addToText}/>
          <Button symbol='*' color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol='1' handleClick={addToText}/>
          <Button symbol='2' handleClick={addToText}/>
          <Button symbol='3' handleClick={addToText}/>
          <Button symbol='+' color={buttonColor} handleClick={addToText}/>
        </div>
        <div className='row'>
          <Button symbol='0' handleClick={addToText}/>
          <Button symbol='.' handleClick={addToText}/>
          <Button symbol='=' handleClick={calculateResult}/>
          <Button symbol='-' color={buttonColor} handleClick={addToText}/>
        </div>
        <Button symbol='Clear' color={buttonColor} handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
