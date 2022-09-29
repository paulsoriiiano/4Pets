import './App.css';
import LoginPage from './views/account/LoginPage';
import RegisterPage from './views/account/RegisterPage';
import ForgetPassword from './views/account/ForgetPassword';
import HomePage from './views/user/HomePage';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AuthContext, AuthProvider} from '../src/contexts/AuthContext'



function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
      <Routes>
      <Route  exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
      </Routes>
      </AuthProvider>
    </Router>
    </div>

  )
}

export default App
 












