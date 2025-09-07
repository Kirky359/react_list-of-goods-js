import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
import cn from 'classnames';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [current, setCurrent] = useState('');
  const [reverse, setReverse] = useState(false);
  const [goods, setGoods] = useState(goodsFromServer);
  const [reset, setReset] = useState(false);

  const HandleSortAlph = () => {
    setGoods([...goodsFromServer].sort((a, b) => a.localeCompare(b)));
  };

  const HandleSortLength = () => {
    setGoods([...goodsFromServer].sort((a, b) => a.length - b.length));
  };

  const HandleReverse = goodsReverse => {
    setGoods(goodsReverse.reverse());
  };

  const HandleReset = () => {
    setReset(false);
    setCurrent('');
    setReverse('false');
    setGoods(goodsFromServer);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info', {
            'is-light': current !== 'alph',
          })}
          // "button is-info is-light"
          onClick={() => {
            setCurrent('alph');
            setReverse(false);
            HandleSortAlph();
            setReset(true);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button is-info', {
            'is-light': current !== 'len',
          })}
          onClick={() => {
            setCurrent('len');
            setReverse(false);
            HandleSortLength();
            setReset(true);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-warning', { 'is-light': reverse !== true })}
          onClick={() => {
            if (reverse) {
              HandleReverse(goods);
              setReverse(false);
            } else {
              HandleReverse(goods);
              setReverse(true);
            }
          }}
        >
          Reverse
        </button>

        {reset && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              HandleReset(true);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li key={good}> {good}</li>
        ))}
      </ul>
    </div>
  );
};
