import React from "react";
import { NavLink, withRouter } from "react-router-dom";
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
            <Nava href="/help" className="drop-item">
              Need Help?
            </NavLink>
            <Nava href="/privacy" className="drop-item">
              Privacy Policy
            </NavLink>
            <a href="/sitemap.xml" className="drop-item">
              Sitemap
            </a>
          </div>
        </div>
      </div>
      <Nava href="/team" className="nav-item">
        Our Team
      </NavLink>
      <div className="dropdown">
        <button className="drop-btn nav-item">
          Services
          {dropArrow}
        </button>
        <div className="dropdown-content">
          <div className="nav-section">
            <h3>SEO</h3>
            <Nava href="/seo/Friendly" className="drop-item">
              SEO - Search Engine Optimization
            </NavLink>

            <Nava href="/seo/seoOrganic" className="drop-item">
              Organic Search Engine Optimization
            </NavLink>

            <Nava href="/social-media" className="drop-item">
              Social Media
            </NavLink>
          </div>
          <div className="nav-section ">
            <h3>Website Design</h3>
            <div className="split">
              <div>
                <NavLink
                  to="/website-design/custom-website-design"
                  className="drop-item"
                >
                  Custom Website Design
                </NavLink>
                <NavLink
                  to="/website-design/eCommerce-website-development"
                  className="drop-item"
                >
                  E-Commerce Website Development
                </NavLink>
                <Nava href="/website-design/coding" className="drop-item">
                  Coding and Programming
                </NavLink>
              </div>
              <div>
                <Nava href="/ad-CopyWriting" className="drop-item">
                  Website Ad-Copy Writing
                </NavLink>

                <NavLink
                  to="/website-design/website-maintenance"
                  className="drop-item"
                >
                  Website Maintenance
                </NavLink>
                <NavLink
                  to="/website-design/website-useability"
                  className="drop-item"
                >
                  Creating Your Website-Useability
                </NavLink>
              </div>
            </div>
            <Nava href="/website-design/inquiry-form" className="drop-item">
              Inquiry/Survey Form
            </NavLink>
          </div>
          <div className="nav-section">
            <h3>Graphic Design</h3>
            <NavLink
              to="/graphic-design/website-logo-design"
              className="drop-item"
            >
              Website Logo Design
            </NavLink>

            <NavLink
              to="/graphic-design/printed-media-logos"
              className="drop-item"
            >
              Print Logo Design
            </NavLink>

            <NavLink
              to="/graphic-design/digital-and-print-graphic-design"
              className="drop-item"
            >
              Print & Graphic Design Services
            </NavLink>
          </div>
        </div>
      </div>
      <Nava href="/plans" className="nav-item">
        Pricing
      </NavLink>
      {/* <Nava href="/portfolio" className="nav-item">
        Our Work
      </NavLink> */}
      <a
        href="https://bluesmokemedianomads.com"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
      >
        Blog
      </a>
      <Nava href="/contact" className="nav-item">
        Contact
      </NavLink>
    </nav>
  );
});
