import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//* Images
import websiteUsability from "../../images/website_design_useability.png";

export default function WebsiteUsability() {
  return (
    <div className="website-usability page-wrapper">
      <img
        src={websiteUsability}
        alt="Website Useability Equals Sales"
        className="hero-image"
      />
      <div className="content">
        <h1>Website Useability Equals Sales</h1>
        <p>
          At <span>Blue Smoke Digital Media,</span> we take website usability
          seriously. Your website is an investment that should benefit you and
          your company by helping your visitors find what they’re looking for.
          In addition to ensuring that your website is clear and easy to use,
          we’ll address issues of necessary information, speed of download, how
          information “flows” through your site, and more. Our{" "}
          <Link to="/website-design/custom-website-design">
            website design{" "}
          </Link>
          includes solid graphic design skills,{" "}
          <Link to="/website-design/coding">
            high-end programming website applications,
          </Link>{" "}
          and cutting edge{" "}
          <Link to="/seo/seoOrganic">website optimization</Link> techniques. We
          will do everything you need to greatly improve your business Web
          presence. We’ll explain exactly what you do or do not need and why,
          and then we’ll do everything for you. Here are the steps we take:
        </p>
        <ul>
          <li>
            Meet with you, in person, on the phone or in a Zoom chat, to learn
            exactly what you want and expect. Here we help you come up with
            concrete goals you want to achieve with the new website. We’ll
            discuss with you possible new Web services and lead generation
            features you can include and what ones you want to include from your
            old site,
          </li>
          <li>
            We’ll review your old website with you and determine along with you
            what features should be included or left out of the new site
            <Link to="/article/1">
              {" "}
              (read 10 Prominent Website Design Mistakes, article).
            </Link>
          </li>
          <li>
            We’ll investigate what worked and didn’t work with your old site and
            plan your new site accordingly.
          </li>
          <li>
            Assess how your current server platform is working for you. We’ll
            also assess how your site’s{" "}
            <Link to="/website-design/coding">Web programming</Link> is
            performing. We’ll explain the different computer server platforms
            and languages you can choose from and the pros and cons of each. If
            you decide you want a new platform or technology, we’ll help you
            determine which to choose for your new site and what Web programming
            will be needed.
          </li>
          <li>
            We will guide you through the development of the new look & feel of
            your Website design (if you decide you want a new look & feel),
            helping you decide what will best{" "}
            <Link to="/article/7">communicate your business message.</Link>
          </li>
        </ul>
      </div>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Mobile Meta --> */}

        <link
          rel="canonical"
          href="https://bluesmokedigitalandprintedmedia.com/website-design/website-useability"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>Website Useability to Equal Sales</title>
        <meta
          name="description"
          content="Your website is an investment that should benefit you and your company by helping your visitors find what they’re looking for. In addition to ensuring that your website is clear and easy to use, we’ll address issues of necessary information, speed of download, how information “flows” through your site, and more ."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Website Useability to Equal Sales" />
        <meta
          itemprop="description"
          content="Your website is an investment that should benefit you and your company by helping your visitors find what they’re looking for. In addition to ensuring that your website is clear and easy to use, we’ll address issues of necessary information, speed of download, how information “flows” through your site, and more ."
        />
        <meta
          itemprop="image"
          content="../../images/website_design_useability.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Website Useability to Equal Sales" />
        <meta
          property="og:description"
          content="Your website is an investment that should benefit you and your company by helping your visitors find what they’re looking for. In addition to ensuring that your website is clear and easy to use, we’ll address issues of necessary information, speed of download, how information “flows” through your site, and more ."
        />
        <meta
          property="og:image"
          content="../../images/website_design_useability.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Website Useability to Equal Sales"
        />
        <meta
          name="twitter:description"
          content="Your website is an investment that should benefit you and your company by helping your visitors find what they’re looking for. In addition to ensuring that your website is clear and easy to use, we’ll address issues of necessary information, speed of download, how information “flows” through your site, and more ."
        />
        <meta
          name="twitter:image"
          content="../../images/website_design_useability.png"
        />
      </Helmet>
    </div>
  );
}
