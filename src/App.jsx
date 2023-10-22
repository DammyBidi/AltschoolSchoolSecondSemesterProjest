import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomCounterPage from './CustomCounterPage';
import NotFound from './NotFound';
import ErrorBoundaryTest from './ErrorBoundaryTest';
import Homepage from './Homepage';
import ErrorComponent from './ErrorComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route  path="/" element={<Homepage/>} />
        <Route  path="/counter" element={<CustomCounterPage/>} />
        <Route  path="/error" element={
          <ErrorBoundaryTest>
            <ErrorComponent/>
          </ErrorBoundaryTest>
        } /> 
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
