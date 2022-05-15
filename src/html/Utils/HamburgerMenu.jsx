import React from "react";
import { Link, withRouter } from "react-router-dom";

export default withRouter(function HamburgerMenu(props) {
  props.history.listen(() => {
    document.querySelector("input[type='checkbox']").checked = false;
  });
  return (
    <nav role="navigation" className="hamburger-menu">
      <div id="menuToggle">
        {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
        <input type="checkbox" />
        {/* Spans act as a hamburger */}
        <span />
        <span />
        <span />

        <ul id="menu">
          <a href="/">
            {" "}
            <li>Home</li>
          </a>

          <a href="/team">
            <li>Our Team</li>
          </a>
          <li className="sub-menu-btn">Services</li>
          <ul className="sub-drop-menu">
            <div className="dropdown-content">
              <h3>SEO</h3>

              <a href="/seo/Friendly">SEO - Search Engine Optimization</a>

              <a href="/seo/seoOrganic">Organic Search Engine Optimization</a>
              <a href="/social-media">Social Media</a>
              <h3>Website Design</h3>

              <a href="/website-design/custom-website-design">
                Custom Website Design
              </a>

              <a href="/website-design/eCommerce-website-development">
                E-Commerce Website Development
              </a>

              <a href="/website-design/website-useability">
                Creating Your Website-Useability
              </a>

              <a href="/ad-CopyWriting">Website Ad-Copy Writing</a>

              <a href="/website-design/website-maintenance">
                Website Maintenance
              </a>

              <a href="/website-design/coding">Coding and Programming</a>

              <a href="/website-design/inquiry-form">Inquiry/Survey Form</a>
              <h3>Graphic Design</h3>

              <a href="/graphic-design/website-logo-design">
                Website Logo Design
              </a>

              <a href="/graphic-design/printed-media-logos">
                Print Logo Design
              </a>

              <a href="/graphic-design/digital-and-print-graphic-design">
                Print & Graphic Design Services
              </a>
            </div>
          </ul>
          <a href="/plans">
            <li>Pricing</li>
          </a>

          <a
            href="https://bluesmokemedianomads.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Blog</li>
          </a>

          <a href="/contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
});
