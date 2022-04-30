import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

//* Images
import temporaryImg from '../images/slide-1.png';
import aImg from '../images/slide-1.png';
import bImg from '../images/slide-1.png';
import cImg from '../images/slide-1.png';

export default function Home() {
  return (
    <div className="home page-wrapper">
      <section className="globe">
        <div>
          {/* //? do we want this a h2 and the brand awareness as an h1? Blue */}
          <h1>
            Smoke Digital and
            <br />
            Printed Media
          </h1>
          <br />
          produces a growing roster of local, regional and national clients
          ranging from one-person companies, small and medium sized business to
          non-profit organizations. Our websites are fast loading,
          <Link to="/seo/seoOrganic">Organically Search Engine Optimized,</Link>
          visually appealing, and easy to navigate.
          <p>
            What do your customers see... <span>Are You Sure?</span>
          </p>
        </div>
      </section>
      <section className="brand-awareness">
        <h2>
          Increase your brand awareness
          <br />
          with a
          <br />
          custom website design
        </h2>
        <div>
          <img src={temporaryImg} alt="img" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            eveniet doloribus facere provident aliquid nesciunt nulla! Autem,
            doloribus quam! Vitae, sequi ipsa! Rerum sunt cupiditate,
            accusantium facere explicabo corporis optio?
          </p>
        </div>
      </section>
      <p className="some-cta">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <section className="importance">
        <h2>What is the importance of a custom website design</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          doloremque sapiente itaque tempora quis illo quam similique, soluta
          accusantium dignissimos expedita ab omnis, explicabo provident minima
          illum debitis magni sunt.
        </p>
      </section>
      <section className="quote-cta">
        <div className="quote">
          <p>"Good design is obvious.</p>
          <p>Great design is transparent."</p>
        </div>
        <div>
          <button>CLICK HERE FOR CTA</button>
        </div>
      </section>
      <section className="abc-wrapper">
        <h3>The ABC's of a Custom Website Design</h3>
        <div className="abc">
          <div className="letter a">
            <img src={aImg} alt="3d A" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quasi veniam reiciendis, magni deleniti asperiores praesentium
              voluptas.
            </p>
          </div>
          <div className="letter b">
            <img src={bImg} alt="3d B" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quasi veniam reiciendis, magni deleniti asperiores praesentium
              voluptas.
            </p>
          </div>
          <div className="letter c">
            <img src={cImg} alt="3d C" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quasi veniam reiciendis, magni deleniti asperiores praesentium
              voluptas.
            </p>
          </div>
        </div>
      </section>
      <section className="tips-continued">
        <h2>Continued Web Design Tips</h2>
        <div>
          <img src={temporaryImg} alt="Temp img" />
          <div className="tips">
            <ul>
              <li>
                <span>Your website should be easy to navigate</span>
                <br />
                If your customers can't easily find what they want from your
                website, they will simply move on to the next vendor in teh
                SERPS (Search engine results pages). he navigation should be
                intuitive and the text easy to read.
              </li>
              <li>
                <span>Make your domain name memorable</span>
                <br />
                Choose a domain name that is easy to for your users to rememer.
                Choosing a complicated doomain name will make it difficult for
                your customers to find our website, thereby wasting your custom
                website design
              </li>
              <li>
                <span>Always leave room for improvement</span>
                <br />
                Be sure the information is up to date and add new pages on a
                regular basis. adding new information regularly helps with your
                websites search engine optimization (seo)
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="visibility-cta">
        Ready to increase your visibility? <button>Start Here</button>
      </section>

      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        {/* <!-- Mobile Meta --> */}

        <link
          rel="canonical"
          href="https://www.bluesmokedigitalandprintedmedia.com"
        />

        {/* <!-- HTML Meta Tags --> */}
        <title>
          Blue Smoke Digital and Printed Media is an online Digital company
          specializing in Custom Designed Websites with Organic SEO built into
          your site at NO EXTRA COST, a Digital and Printed Media company and
          Social Media Marketing company.
        </title>

        <meta
          name="keywords"
          content="custom website design, website design useability, graphic design, website application, website optimization, web design, website design and development, e-commerce development, web design and development company, e-commerce website development company, web graphic design, custom web design services, best website development company, web design company near me, custom website creation"
        />

        <meta
          name="description"
          content="Blue Smoke Digital and Printed Media is a full-service marketing agency. We partner with clients to either supplement their in-house marketing department or serve as their full outsourced marketing department. Our areas of expertise include Website Design, Branding, Graphic Design, Online Marketing and Traditional Marketing, Social Media Marketing, and Reputation Management and Review. We are located in TN, UT, FL, NC, SC, VA, ID and WA."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Blue Smoke Digital and Printed Media" />
        <meta
          itemprop="description"
          content="Blue Smoke Digital and Printed Media is a full-service marketing agency. We partner with clients to either supplement their in-house marketing department or serve as their full outsourced marketing department. Our areas of expertise include Website Design, Branding, Graphic Design, Online Marketing and Traditional Marketing, Social Media Marketing, and Reputation Management and Review. We are located in TN, UT, FL, NC, SC, VA, ID and WA."
        />
        <meta itemprop="image" content="../images/Web-Development.jpg" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.BlueSmokeDigitalAndPrintedMedia.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blue Smoke Digital and Printed Media is an online Digital company specializing in Custom Designed Websites with Organic SEO built into your site at NO EXTRA COST, a Digital and Printed Media company and Social Media Marketing company."
        />
        <meta
          property="og:description"
          content="Blue Smoke Digital and Printed Media is a full-service marketing agency. We partner with clients to either supplement their in-house marketing department or serve as their full outsourced marketing department. Our areas of expertise include Website Design, Branding, Graphic Design, Online Marketing and Traditional Marketing, Social Media Marketing, and Reputation Management and Review. We are located in TN, UT, FL, NC, SC, VA, ID and WA."
        />
        <meta property="og:image" content="../images/Web-Development.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blue Smoke Digital and Printed Media is an online Digital company specializing in Custom Designed Websites with Organic SEO built into your site at NO EXTRA COST, a Digital and Printed Media company and Social Media Marketing company."
        />
        <meta
          name="twitter:description"
          content="Blue Smoke Digital and Printed Media is a full-service marketing agency. We partner with clients to either supplement their in-house marketing department or serve as their full outsourced marketing department. Our areas of expertise include Website Design, Branding, Graphic Design, Online Marketing and Traditional Marketing, Social Media Marketing, and Reputation Management and Review. We are located in TN, UT, FL, NC, SC, VA, ID and WA."
        />
        <meta name="twitter:image" content="../images/Web-Development.jpg" />
      </Helmet>
    </div>
  );
}
