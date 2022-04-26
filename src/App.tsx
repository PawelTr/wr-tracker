import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SettingsPage from './pages/settings-page/settings-page';
import HomePage from './pages/home-page/home-page'
import SideBar from './components/side-bar/side-bar'
import './App.scss'
import LoginPage from './pages/login-page/login-page';
import { useAction } from './store/action-creators/useAction';

const App: React.FC = () => {

  const { checkAuth } = useAction();

  useEffect(() => {
    if (localStorage.getItem('WRAccessToken')) {
      checkAuth();
    }
  })

  return (
    <BrowserRouter>
      <div className="container">
        <SideBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
