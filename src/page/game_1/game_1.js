import React,{useState} from 'react'
import './game_1.scss';
import Out_button from '../../component/Out_button/Out_button';
import { Link } from 'react-router-dom';

function Main() {
const [status, setStatus] = useState('1과 100 사이의 숫자를 맞추세요!');
const [answer, setAnswer] = useState(0);
const [righyAnswer, setRightAnser] = useState(Math.ceil(Math.random()*30));
var num=0;

function returnFunc(e){

  e.preventDefault();
  if(+answer === righyAnswer){
    console.log(answer)
    setStatus("정답!!!")
    console.log(num);
  }else if(answer < righyAnswer){
    
    setStatus("업 ▲")
  }else{
    
    setStatus("다운 ▼")
  }
}

// 게임 리셋 후 또 다른 렌덤 숫자 생성, 
// 텍스트 상태 변경
// 현재 input 초기값 설정
function resetFunc(){
  setRightAnser(Math.ceil(Math.random()*30))
  setStatus("1과 100 사이의 숫자를 맞추세요!")
  setAnswer(0);
}


// input 값을 가져올수 있는 함수
function changeAnswer(e){
  setAnswer(e.target.value);
}

  return (
    
    <div class="background-card">
      <div className='Out'>
          <Link to='/'>
            <Out_button />
          </Link>
      </div>
      <div className='card'>
      <form onSubmit={returnFunc}>
        <div className='title'>
          <h1 className='title_h1'>Up And Down</h1>
        </div>
        <div className='ment'>
          <p>{status}</p>
        </div>
        <div>
          <div className='input_pl'>
            <input 
              type="number"  max="100" min="1"
              value={answer} onChange={changeAnswer} />
          </div>
          <div className='checkbutton'>
            <span className='check'>
              <button className='button'>확인</button>
            </span>
            <span className='return'>
              <button onClick={resetFunc} className='button'>
                다시하기
              </button>
            </span>
          </div> 
        </div>
      </form>
      </div>
    </div>
  );
}

export default Main;