import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

function PortfolioForm() {
  const { personalInfo, setPersonalInfo } = useContext(AppContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/portfolio");
  };

  return (
    <div className='portfolio-wrapper'>
      <div className='portfolioform-container'>
        <h1 className='portfolioform-header'>
          Enter Your Portfolio Information
        </h1>
        <form onSubmit={handleSubmit} className='portfolioform-form'>
          <label className='portfolioform-label'>
            Name:
            <input
              type='text'
              name='name'
              value={personalInfo.name}
              onChange={handleInputChange}
              className='portfolioform-input'
            />
          </label>
          <br />
          <label className='portfolioform-label'>
            Bio:
            <textarea
              name='bio'
              value={personalInfo.bio}
              onChange={handleInputChange}
              className='portfolioform-textarea'></textarea>
          </label>
          <br />
          <label className='portfolioform-label'>
            Skills (separate with ";;"):
            <input
              type='text'
              name='skills'
              value={personalInfo.skills}
              onChange={handleInputChange}
              className='portfolioform-input'
            />
          </label>
          <br />
          <label className='portfolioform-label'>
            Profession:
            <input
              type='text'
              name='profession'
              value={personalInfo.profession}
              onChange={handleInputChange}
              className='portfolioform-input'
            />
          </label>
          <br />
          <label className='portfolioform-label'>
            About:
            <input
              type='text'
              name='about'
              value={personalInfo.about}
              onChange={handleInputChange}
              className='portfolioform-input'
            />
          </label>
          <br />
          <label className='portfolioform-label'>
            Specialisation:
            <input
              type='text'
              name='specialisation'
              value={personalInfo.specialisation}
              onChange={handleInputChange}
              className='portfolioform-input'
            />
          </label>
          <br />
          <label className='portfolioform-label'>
            Projects (separate with ";;"):
            <input
              type='text'
              name='projects'
              value={personalInfo.projects}
              onChange={handleInputChange}
              className='portfolioform-input'
            />
          </label>
          <br />
          <button type='submit' className='portfolioform-submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PortfolioForm;


