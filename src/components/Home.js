import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
        <div className="home-heading">
        <div class="name">
            <h2>CVolio</h2>
        </div>
        <h1 class="site-title">Create / Customize / Showcase</h1>
        <h2 class="site-title2"> Your Future, Your Portfolio</h2>
        </div>
      
      <div className='home-options'>
        <div className="home-btns">
          <div>
            <Link to='/portfolio-templates'>
              <button className="home-btn">Portfolio Generator</button>
            </Link>
          </div>

          <div>
            <Link to='/cv-templates'>
              <button className="home-btn">CV Generator</button>
            </Link>
          </div>
        </div>

        <section className='home-main-content'>
          <h2>Build Your Dynamic CV and Portfolio</h2>
          <div className='home-cards'>
            <div className='home-card'>
              <h3>CV Builder</h3>
              <p>
                Create a personalized CV with professional templates and
                customization.
              </p>
              <Link to='/cv-templates'>
              <button className="home-btn">CV Generator</button>
            </Link>
            </div>
            <div className='home-card'>
              <h3>Portfolio Builder</h3> <br/>
              <p>Design an eye-catching portfolio to showcase your work.</p>
              <Link to='/portfolio-templates'>
                <button className="home-btn">Portfolio Generator</button>
              </Link>
            </div>
          </div>
        </section>

        <footer className='home-footer'>
          <p>&copy; 2024 CVolio. All rights reserved.</p>
          <p>
            For inquiries, contact us at{" "}
            <a href='mailto:ivar8888@gmail.com'>ivar8888@gmail.com</a> or call
            +91 9832457523
          </p>
          <p>Follow us on LinkedIn Twitter Instagram</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;