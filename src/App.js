import React from 'react';
import './App.css';
import Portfolio from './Components/Portfolio';
import { projects, filters } from './data';

function App() {
  return (
    <div className="page">
      <Portfolio
        projects={projects}
        filters={filters}
      />
    </div>
  );
}

export default App;
