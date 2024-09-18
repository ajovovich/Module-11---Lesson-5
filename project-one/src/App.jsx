import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';


function App() {
    const [count, setCount] = useState(0);
  
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
          </div>
        </div>
      </Router>
    );
  }

export default App;