import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Landing, Error, Register } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="landing" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position='top-center' />
      </div>
    </Router>
  );
}

export default App;
