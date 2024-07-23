import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectStock } from '../store/actions';

const SelectStock = () => {
  const [symbol, setSymbol] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSymbol(e.target.value);
  };

  const handleSelect = () => {
    dispatch(selectStock(symbol));
  };

  return (
    <div>
      <input type="text" value={symbol} onChange={handleChange} placeholder="Enter Stock/Crypto Symbol" />
      <button onClick={handleSelect}>Select</button>
    </div>
  );
};

export default SelectStock;
