import './main.scss';
import Button from '../../component/Button/Button';
import Button2 from '../../component/Button2/Button2';
import { Link } from 'react-router-dom';
export default function Main(){
    return(
        
        <div className='total'>
            
            <div className='title'>
                <h1 className='title_txt'>Mini Game</h1>
            </div>
            <div className='start'>
                <span className='game1_button'>
                    <Link to='/game_1'>
                        <Button />
                    </Link>
                </span>
                <span>
                    <Link to='/game_2'>
                        <Button2 />
                    </Link>
                </span>
                
            </div>
        </div>
    )
}