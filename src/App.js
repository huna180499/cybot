import React, { useState } from 'react';
import './App.css';
import { Home } from './pages/page-champ/Champs';
import Champs from './pages/page-champ/Champs';
import TeamLine from './pages/page-team/TeamLine';
import Training from './pages/page-train/Training';


function App() {
  const [page, setPage] = useState(0);

  const goToPage = (event) => {setPage(event.currentTarget.id)}

  const dsPage = [<Home func={goToPage} />,<Champs />, <TeamLine /> ,<Training/>]
  return (
    <div className="App">
      <div className='btn-home' onClick={() => setPage(0)}><i className="fa fa-home"></i></div>
      {dsPage[page]}
    </div>
  );
}

export default App;
