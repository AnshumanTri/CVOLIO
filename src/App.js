import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PortfolioForm from './components/PortfolioForm';
import CVForm from './components/CVForm';
import PortfolioPage from './components/PortfolioPage';
import CVPage from './components/CVPage';
import PortfolioTemplates from './components/PortfolioTemplates';
import CVTemplates from './components/CVTemplates';
import './styles.css' ;
import './index.css';
export const AppContext = React.createContext();

function App() {
  const [personalInfo, setPersonalInfo] = React.useState({
    name: '',
    bio: '',
    skills: '',
    projects: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    portfolioTemplate: '',
    cvTemplate: ''
  });

  return (
    <AppContext.Provider value={{ personalInfo, setPersonalInfo }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-templates" element={<PortfolioTemplates />} />
          <Route path="/cv-templates" element={<CVTemplates />} />
          <Route path="/portfolio-form" element={<PortfolioForm />} />
          <Route path="/cv-form" element={<CVForm />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
