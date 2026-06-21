// import React from "react";
// import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Find the perfect <br />
          freelance services for <br />
          your business
        </h1>

        <p>
          Connect with millions of top-rated designers & perfect freelancers
          around the world.
        </p>

        <div className="hero-buttons">
          <button className="discover-btn">Discover Now</button>
          {/* <button className="watch-btn">▶ Watch Demo</button> */}
        </div>

        <div className="stats">
          <div>
            <h3>932M</h3>
            <span>Graphic</span>
          </div>

          <div>
            <h3>720M</h3>
            <span>UX/UI</span>
          </div>

          <div>
            <h3>90M</h3>
            <span>Motion Graphics</span>
          </div>

          <div>
            <h3>236M</h3>
            <span>Website Designer</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
          alt="Freelancer"
        />
      </div>
    </section>
  );
};

export default HeroSection;
