import React, { Fragment } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import imageBg from '../layouts/images/cover-two.jpg';

export const Export = () => {
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
                EXPORT COMPLIANCE
              </h2>
            </div>
          </div>
          <div className='container bg-vdark'>
            <div className='terms-item-container'>
              <div className='text-left text-white'>
                <h2 class='section-title text-center text-center mt-5'>
                  Scope Of This Notice
                </h2>
                <p className='terms-text text-white text-justify mb-5'>
                  It is the policy of Prodotype to comply fully with the export
                  laws and regulations of the Indian government. As part of this
                  policy, Prodotype is providing this site as a service to our
                  partners and customers. Please note that this site is intended
                  as a source of information only and is not to be considered a
                  source of legal guidance or advice.
                  <br />
                  Before considering the export of Prodotype® product or
                  service, customers should review the License Agreement that
                  came with the product/service to verify if the terms of the
                  agreement allow the product/the usage of the service to be
                  moved out or of a given country or region.
                </p>

                <h2 class='section-title text-center'>Laws and Regulations</h2>
                <p className="className='terms-text text-white text-justify mb-5'">
                  Great care must be taken when exporting, re-exporting, or
                  transferring Prodotype and Prodotype Media and Entertainment
                  products or technology.
                  <br />
                  Prodotype® and Prodotype Media and Entertainment products and
                  technology are considered “Country of Origin: India.”
                  Therefore, the export or re-export of these products, or
                  transfer of these technologies, is subject to the export laws
                  and regulations of the India. The primary agencies that
                  administer and enforce these laws and regulations are the
                  Bureau of Industry and Security and the Office of Foreign
                  Assets Control.
                  <br />
                  The scope of the Indian export laws and regulations primarily
                  includes
                </p>
                <ul>
                  <li>
                    ● The export of Indian products or technology from the India
                  </li>
                  <li>
                    ● The movement of Indian products or technology outside of
                    India
                  </li>
                  <li>
                    ● The movement of non-Indian products or technology that
                    have Indian content
                  </li>
                </ul>
                <h2 class='section-title text-center'>Licensing</h2>
                <p className="className='terms-text text-white text-justify mb-5'">
                  An export license is required before proceeding with a
                  transaction that involves embargoed or restricted countries,
                  denied parties, certain parties involved with weapons of mass
                  destruction, or parties involved in denied end uses.
                </p>
                <h2 class='section-title text-center'>Compliance Procedures</h2>
                <p className="className='terms-text text-white text-justify mb-5'">
                  There are a number of issues to consider when exporting, but
                  the basic export compliance procedure for a transaction
                  involving Prodotype or Prodotype Media and Entertainment
                  products or technology is as follows:
                </p>
                <ul>
                  <li>
                    1. Obtain the ECCN of the product or technology and
                    determine which export restrictions apply.
                  </li>
                  <li>
                    2. Screen all parties involved against the latest denial
                    lists
                  </li>
                  <li>
                    3. Determine if any of the parties are involved in denied
                    activities relating to the design, development, production,
                    stockpiling, or use of weapons of mass destruction
                  </li>
                  <li>
                    4. Determine if any of the parties are involved in denied
                    activities such as terrorism or illegal narcotics
                    trafficking.
                  </li>
                </ul>
                <h2 class='section-title text-center'>Denial Lists</h2>

                <p className="className='terms-text text-white text-justify mb-5'">
                  To obtain the latest denial list information, such as the
                  latest updates of the Denied Persons List or the Entity List,
                  please contact the Bureau of Industry and Security. For
                  information about the latest update of the Specially
                  Designated Nationals List, please contact the Office of
                  Foreign Assets Control. You should contact both agencies for
                  information on the embargoed countries
                </p>
                <h2 class='section-title text-center'>
                  Weapons of Mass Destruction and Other Denied End Uses
                </h2>

                <p className="className='terms-text text-white text-justify mb-5'">
                  When exporting, re-exporting, or transferring Prodotype and
                  Prodotype Media and Entertainment products or technology, the
                  end user or other parties included in the transaction must not
                  be involved in the design, development, production,
                  stockpiling, or use of nuclear weapons; missiles; chemical or
                  biological weapons, agents, or precursors. There are some
                  countries that are exempted from some of these restrictions
                  but you will need to contact the Bureau of Industry and
                  Security to determine if the exemptions will apply for a given
                  end user or transaction.
                  <br />
                  Do not proceed with a transaction if you have reason to
                  suspect that any party is either on a denial list, involved in
                  weapons of mass destruction work or involved in denied
                  activities such as illegal narcotics trafficking or terrorism.
                </p>
                <h2 class='section-title text-center'>Export Counseling</h2>

                <p className="className='terms-text text-white text-justify mb-5'">
                  It is beyond the scope of this site to offer counseling or
                  advice on export compliance issues. Please contact the
                  relevant government agencies for counseling and guidance on
                  export licensing and other issues as well as access to the
                  latest information on embargoes and denial lists. Employing an
                  export compliance consultant should also be considered.
                  <br />
                  Prodotype provides this site for your reference only. While
                  Prodotype attempts to keep the information on this site
                  accurate, current, and complete, Prodotype makes no warranty
                  or representation that the information contained herein is
                  accurate, current, or complete. It is your obligation to
                  comply with the requirements of United States export laws and
                  regulations. Before exporting or re-exporting any Prodotype or
                  Prodotype Media and Entertainment product or technology, you
                  should consult directly with the agencies of the Indian
                  government that administer the export control laws or
                  regulations.
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

export default Export;
