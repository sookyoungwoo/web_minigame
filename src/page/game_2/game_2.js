import React, { useState, useRef, useEffect, useCallback } from 'react';
import './game_2.scss';
import Out_button from '../../component/Out_button/Out_button';
import { Link } from 'react-router-dom';

const scores = {
  '✊': 1,
  '✋': 0,
  '✌': -1,
};

const RPS = () => {
  const [computer, setComputer] = useState('✊');
  const [user, setUser] = useState('👍');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const interval = useRef(null);

  const changeHand = useCallback(() => {
    if (computer === '✊') {
      setComputer('✋');
    } else if (computer === '✋') {
      setComputer('✌');
    } else if (computer === '✌') {
      setComputer('✊');
    }
  }, [computer]);

  const onClickBtn = (user) => () => {
    setUser(user);
    setBtnDisabled(true);
    clearInterval(interval.current);
    const diff = scores[user] - scores[computer];
    if (diff === 0) {
      setResult('비김');
    } else if ([-1, 2].includes(diff)) {
      setResult('이김');
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult('짐');
      setScore((prevScore) => prevScore - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
      setBtnDisabled(false);
    }, 1000);
  };

  useEffect(() => {
    interval.current = setInterval(changeHand, 90);
    return () => {
      clearInterval(interval.current);
    };
  }, [changeHand]);

  return (
    <div className='total'>
        <div className='Out'>
          <Link to='/'>
            <Out_button />
          </Link>
      </div>
      <div className='sub_total'>
      <div className='hand'>{computer}</div>
      <div className='hand'>{result}</div>
      <div className='hand'>{user}</div>
      <div className='on_button'>
        <button disabled={btnDisabled} onClick={onClickBtn('✊')} className='button'>
        ✊
        </button>
        <button disabled={btnDisabled} onClick={onClickBtn('✋')} className='button'>
        ✋
        </button>
        <button disabled={btnDisabled} onClick={onClickBtn('✌')} className='button'>
        ✌
        </button>
      </div>
      <div className='score'>점수 : {score}점</div>
    </div>
    </div>
  );
};

export default RPS;