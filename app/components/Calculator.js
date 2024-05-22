// components/Calculator.js
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-lg w-80">
        <div className="mb-4 p-2 bg-gray-100 rounded text-right text-xl">{input}</div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((item) => (
            <button key={item} onClick={() => handleClick(item)} className="p-2 bg-gray-200 rounded">
              {item}
            </button>
          ))}
          {['4', '5', '6', '*'].map((item) => (
            <button key={item} onClick={() => handleClick(item)} className="p-2 bg-gray-200 rounded">
              {item}
            </button>
          ))}
          {['1', '2', '3', '-'].map((item) => (
            <button key={item} onClick={() => handleClick(item)} className="p-2 bg-gray-200 rounded">
              {item}
            </button>
          ))}
          {['0', '.', '=', '+'].map((item) => (
            <button
              key={item}
              onClick={item === '=' ? handleCalculate : () => handleClick(item)}
              className="p-2 bg-gray-200 rounded"
            >
              {item}
            </button>
          ))}
          <button onClick={handleClear} className="col-span-4 p-2 bg-red-500 text-white rounded">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
