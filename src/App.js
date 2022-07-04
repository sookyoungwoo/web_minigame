import Main from './page/main/main';
import Game from './page/game_1/game_1';
import Game2 from './page/game_2/game_2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/game_1' element={<Game />} />
          <Route path='/game_2' element={<Game2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
