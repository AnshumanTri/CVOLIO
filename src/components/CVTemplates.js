import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function CVTemplates() {
  const { setPersonalInfo } = useContext(AppContext);
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    setPersonalInfo(prevState => ({
      ...prevState,
      cvTemplate: template
    }));
    navigate('/cv-form');
  };

  return (
    <div className="template-page">
      <h1>Select a CV Template</h1>
      <div className="template-options">
        <button onClick={() => handleTemplateSelect('template1')}>Template 1</button>
        <button onClick={() => handleTemplateSelect('template2')}>Template 2</button>
        <button onClick={() => handleTemplateSelect('template3')}>Template 3</button>
      </div>
    </div>
  );
}

export default CVTemplates;
