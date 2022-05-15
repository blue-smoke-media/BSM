import React from "react";
import { a, withRouter } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default withRouter(function Navigation({ history }) {
  // history.listen(() => {});
  const dropArrow = <FiChevronDown color="#7ff76f" />;
  // todo fix dropdown-content not going away on change
  return (
    <nav className="main-nav">
      <div className="dropdown">
        <button className="drop-btn nav-item" onClick={() => history.push("/")}>
          Home{dropArrow}
        </button>
        <div className="dropdown-content home-drop">
          <div className="nav-section">
            <a href="/help" className="drop-item">
              Need Help?
            </a>
            <a href="/privacy" className="drop-item">
              Privacy Policy
            </a>
            <a href="/sitemap.xml" className="drop-item">
              Sitemap
            </a>
          </div>
        </div>
      </div>
      <a href="/team" className="nav-item">
        Our Team
      </a>
      <div className="dropdown">
        <button className="drop-btn nav-item">
          Services
          {dropArrow}
        </button>
        <div className="dropdown-content">
          <div className="nav-section">
            <h3>SEO</h3>
            <a href="/seo/Friendly" className="drop-item">
              SEO - Search Engine Optimization
            </a>

            <a href="/seo/seoOrganic" className="drop-item">
              Organic Search Engine Optimization
            </a>

            <a href="/social-media" className="drop-item">
              Social Media
            </a>
          </div>
          <div className="nav-section ">
            <h3>Website Design</h3>
            <div className="split">
              <div>
                <a
                  to="/website-design/custom-website-design"
                  className="drop-item"
                >
                  Custom Website Design
                </a>
                <a
                  to="/website-design/eCommerce-website-development"
                  className="drop-item"
                >
                  E-Commerce Website Development
                </a>
                <a href="/website-design/coding" className="drop-item">
                  Coding and Programming
                </a>
              </div>
              <div>
                <a href="/ad-CopyWriting" className="drop-item">
                  Website Ad-Copy Writing
                </a>

                <a
                  to="/website-design/website-maintenance"
                  className="drop-item"
                >
                  Website Maintenance
                </a>
                <a
                  to="/website-design/website-useability"
                  className="drop-item"
                >
                  Creating Your Website-Useability
                </a>
              </div>
            </div>
            <a href="/website-design/inquiry-form" className="drop-item">
              Inquiry/Survey Form
            </a>
          </div>
          <div className="nav-section">
            <h3>Graphic Design</h3>
            <a to="/graphic-design/website-logo-design" className="drop-item">
              Website Logo Design
            </a>

            <a to="/graphic-design/printed-media-logos" className="drop-item">
              Print Logo Design
            </a>

            <a
              to="/graphic-design/digital-and-print-graphic-design"
              className="drop-item"
            >
              Print & Graphic Design Services
            </a>
          </div>
        </div>
      </div>
      <a href="/plans" className="nav-item">
        Pricing
      </a>
      {/* <a href="/portfolio" className="nav-item">
        Our Work
      </a> */}
      <a
        href="https://bluesmokemedianomads.com"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
      >
        Blog
      </a>
      <a href="/contact" className="nav-item">
        Contact
      </a>
    </nav>
  );
});
