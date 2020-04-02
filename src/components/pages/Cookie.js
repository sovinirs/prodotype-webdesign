import React, { Fragment } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import imageBg from '../layouts/images/cover-two.jpg';

export const Cookie = () => {
  return (
    <Fragment>
      <div className='bg-vdark'>
        <Navbar />
        <div
          className='terms-container'
          style={{
            backgroundImage: `url(${imageBg})`,
            backgroundPosition: 'center'
          }}
        >
          <div className='container'>
            <div>
              <h2 className='terms-main-heading text-center'>
                PRODOTYPE COOKIE STATEMENT
              </h2>
            </div>
          </div>
          <div className='container bg-vdark'>
            <div className='terms-item-container'>
              <div className='text-left text-white'>
                <p className='terms-text text-white text-justify mb-5'>
                  <strong style={{ color: '#ea1818' }}>Scope</strong>
                  <br />
                  We use cookies and related technologies, such as pixels and
                  beacons (“Cookies”) to provide you with services, to
                  understand how our websites and applications are used, to
                  enable and enhance your experience, and for advertising
                  purposes as explained in our Privacy Statement. In addition to
                  our Privacy Statement and our Children's Privacy Statement
                  this Cookie Statement explains how Prodotype uses Cookies, why
                  we use them, as well as your rights to control our use of
                  them.
                  <br />
                  <strong style={{ color: '#ea1818' }}>
                    Why We Use Cookies
                  </strong>
                  <br />
                  Some of our Cookies that are used to enable your experience
                  are strictly necessary to enable us to perform our contractual
                  obligations to you. These cookies:
                  <br />
                </p>
                <ul>
                  <li>
                    ● enable services, like authenticating you and keeping you
                    logged in
                  </li>
                  <li>
                    ● allow you to use essential features, like a shopping cart,
                    or determining your language or country
                  </li>
                  <li>
                    ● provide information that you requested, via customer
                    support
                  </li>
                  If you disable these types of cookies, you may not be able to
                  access the full functionality of our websites or applications
                  and we may not be able to fulfill your requests.
                  <br />
                  Some of our Cookies can be used to enhance your experience
                  online. Examples of these enhanced experiences can include:
                  <br />
                  <li>
                    ● Provide more relevant experience on Prodotype websites
                  </li>
                  <li>
                    ● Understand your likely interests so we can provide you
                    with more relevant advertisement online and on our Partner’s
                    websites
                  </li>
                  <li>
                    ● Measuring your use of Prodotype websites so that we can
                    improve them, improve your experience with Prodotype, and
                    conduct market research
                  </li>
                </ul>
                <p className='terms-text text-white text-justify mb-5'>
                  These Cookies are based on your consent. If you choose not to
                  accept the use of these Cookies or other technologies, it may
                  prevent you from using certain parts of our websites and
                  applications, and it may reduce the support or information
                  that we can provide you.
                  <br />
                </p>
                <strong style={{ color: '#ea1818' }}>
                  Modifying and deleting Cookies from your browser
                </strong>
                <br />

                <p className='terms-text text-white text-justify mb-5'>
                  With the exception of Cookies that are strictly necessary to
                  operate our website and applications, we will seek your
                  consent before placing cookies. You can modify your browser
                  settings to control whether your computer or other device
                  accepts or declines Cookies. These settings are generally
                  available within your browser’s "Help", "Tools" or "Edit"
                  menus. Keep in mind that your browser settings may prevent you
                  from accessing all functionality on our website.
                  <br />
                  When you change your Cookie preferences on our website, please
                  make sure to clear the Cookies on each browser on each device,
                  in order to reset these settings.
                  <br />
                </p>
                <strong style={{ color: '#ea1818' }}>
                  Marketing and Advertising Cookies
                </strong>
                <br />
                <p className='terms-text text-white text-justify mb-5'>
                  We use these types of Cookies on the basis of your consent to
                  collect information about your browsing or shopping history in
                  order to tailor relevant marketing according to how you use
                  our websites and applications.
                  <br />
                  We may share this information with third parties to help
                  create and deliver advertising personalized to you and your
                  interests.
                  <br />
                  You can also opt-out of receiving marketing advertisements
                  from third-party advertisers and ad networks who are members
                  of the Digital Advertising Alliance's Self-Regulatory
                  Principles for Online Behavioral Advertising by visiting the
                  opt-out pages on their websites.
                  <br />
                  When we send you emails, they might include a web beacon or
                  similar technology that lets us know if you received or opened
                  the email and whether you clicked on any of the links in the
                  email. You can opt-out of marketing emails that may use web
                  beacons by clicking on the opt-out link contained within the
                  email.
                  <br />
                </p>
                <strong style={{ color: '#ea1818' }}>
                  Web Beacons, Pixels, And Other Tracking Technologies
                </strong>
                <br />
                <p className='terms-text text-white text-justify mb-5'>
                  We also use web beacons, which are small electronic images
                  that help deliver cookies and collect statistics about your
                  use of our online services. For example, Prodotype may place
                  web beacons in marketing emails that notify us when you click
                  on a link in the email that directs you to one of Prodotype’s
                  websites.
                  <br />
                </p>
                <strong style={{ color: '#ea1818' }}>Product Analytics</strong>
                <br />
                <p className='terms-text text-white text-justify mb-5'>
                  Our mobile, desktop, and cloud products collect analytics
                  (such as product ID, license information, and device ID) via
                  the Prodotype Analytics Programs and third-party analytics
                  tools. You will be notified about the analytics collected, and
                  the tools used, and you will have an opportunity to change
                  your preference as to whether analytics are collected within
                  each product.
                  <br />
                  For a list of our third-party analytics tools, please contact
                  us.
                  <br />
                  <strong style={{ color: '#ea1818' }}>Who Sets Cookies</strong>
                  <br />
                  We and our service providers, acting on our behalf, set
                  Cookies. Third-parties may also set Cookies that we do not
                  control. For example, when you make purchases, our ecommerce
                  vendors may use Cookies. You can review our ecommerce vendors’
                  privacy policy and terms of sale at checkout to understand
                  their practices and your choices.
                  <br />
                  This Cookie Statement does not apply to third-party practices.
                  Please visit the third-party websites for more information
                  about their use of cookies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Cookie;
