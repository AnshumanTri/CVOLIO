import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function CVForm() {
  const { personalInfo, setPersonalInfo } = useContext(AppContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/cv');
  };

  return (
    <div className='cvForm-wrapper'>
<div className="cvform-container">
      <h1 className="cvform-header">Enter Your CV Information</h1>
      <form className="cvform-form" onSubmit={handleSubmit}>
        <label className="cvform-label">
          Name:
          <input
            type="text"
            name="name"
            value={personalInfo.name}
            onChange={handleInputChange}
            className="cvform-input"
          />
        </label>
        <label className="cvform-label">
          Email:
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleInputChange}
            className="cvform-input"
          />
        </label>
        <label className="cvform-label">
          Phone:
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={handleInputChange}
            className="cvform-input"
          />
        </label>
        <label className="cvform-label">
          Position:
          <input
            type="text"
            name="position"
            value={personalInfo.position}
            onChange={handleInputChange}
            className="cvform-input"
          />
        </label>
        <label className="cvform-label">
          About:
          <input
            type="text"
            name="about"
            value={personalInfo.about}
            onChange={handleInputChange}
            className="cvform-input"
          />
        </label>
        <label className="cvform-label">
          LinkedIn:
          <input
            type="text"
            name="linkedin"
            value={personalInfo.linkedin}
            onChange={handleInputChange}
            className="cvform-input"
          />
        </label>
        <label className="cvform-label">
          Education:
          <textarea
            name="education"
            value={personalInfo.education}
            onChange={handleInputChange}
            className="cvform-textarea"
          ></textarea>
        </label>
        <label className="cvform-label">
          Experience:
          <textarea
            name="experience"
            value={personalInfo.experience}
            onChange={handleInputChange}
            className="cvform-textarea"
          ></textarea>
        </label>
        <label className="cvform-label">
          Projects:
          <textarea
            name="projects"
            value={personalInfo.projects}
            onChange={handleInputChange}
            className="cvform-textarea"
          ></textarea>
        </label>
        <button type="submit" className="cvform-submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
}

export default CVForm;
