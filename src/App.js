import React, { useState } from 'react';
/** Import de la donnée */
import './App.css';
import RobotCard from './components/RobotCard';
import RobotSearch from './components/RobotSearch';
import Robots from './data/data';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <div>
      <RobotSearch search={search} setSearch={setSearch} />
      </div>
      {Robots
        .filter((robot) => robot.name.toLocaleLowerCase().includes(search.toLowerCase()))
        .map((robot, index) => (
          <RobotCard key={index} {...robot} />
        ))
      }
    </div>
  );
}

export default App;
