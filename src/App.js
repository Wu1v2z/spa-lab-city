import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';

function App() {
  // Зчитуємо тему з localStorage або ставимо 'light'
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light');

  // Зберігаємо тему при її зміні
  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.body.className = theme; // Додаємо клас на body для глобальних стилів
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router basename="{process.env.PUBLIC_URL}">
      <div className={`app-container ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main className="content">
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/my-city" element={<MyCity />} />
            <Route path="/my-future" element={<MyFuture />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;