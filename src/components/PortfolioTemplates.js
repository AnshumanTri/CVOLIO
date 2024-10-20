import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function PortfolioTemplates() {
  const { setPersonalInfo } = useContext(AppContext);
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    setPersonalInfo(prevState => ({
      ...prevState,
      portfolioTemplate: template
    }));
    navigate('/portfolio-form');
  };

  return (
    <div className="template-page">
      <h1 className='heading'>Select a Portfolio Template</h1>
      <div className="template-options">
        <button onClick={() => handleTemplateSelect('template1')} className='template1btn'>Template 1</button>
        <button onClick={() => handleTemplateSelect('template2')}className='template2btn'>Template 2</button>
        <button onClick={() => handleTemplateSelect('template3')}className='template3btn'>Template 3</button>
      </div>
    </div>
  );
}

export default PortfolioTemplates;