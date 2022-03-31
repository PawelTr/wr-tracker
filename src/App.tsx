import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SettingsPage from './pages/settings-page/settings-page';
import HomePage from './pages/home-page/home-page'
import SideBar from './components/side-bar/side-bar'
import './App.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <SideBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
