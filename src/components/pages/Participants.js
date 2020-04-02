import React, { Fragment } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import imageBg from '../layouts/images/cover-two.jpg';

export const Participants = () => {
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
                PRODOTYPE PARTICIPANTS GUIDELINES
              </h2>
            </div>
          </div>
          <div className='container bg-vdark'>
            <div className='terms-item-container'>
              <div className='text-left text-white'>
                <h2 className='terms-heading text-center'>
                  NOTICE AND PROCEDURE FOR PARTICIPANT GUIDELINES
                </h2>
                <p>
                  <strong style={{ color: '#ea1818' }}>
                    Conduct guidelines for participants in certain Prodotype
                    online communities and programs.
                  </strong>
                  <br />
                  At Prodotype, we make software for people who make things. We
                  also create programs, platforms, and communities to help
                  empower people with the power to make anything. These
                  Prodotype Participant Guidelines apply to everyone who
                  participates in an Prodotype-branded or Prodotype-sponsored
                  program, platform or community that incorporates these
                  Guidelines by reference (each, a “Prodotype Environment”).
                  <br />
                  We know: reading “Guidelines” might sound boring, but please
                  do take a minute to read and understand them – they’re
                  important. And check back often, because the world is changing
                  and these Guidelines will evolve too – we reserve the right to
                  change them from time to time.
                  <br /> <br />
                  <strong style={{ color: '#ea1818' }}>
                    What are the Guidelines?
                  </strong>
                  <br />
                </p>
                <ul>
                  <li>
                    ● Be Nice. Be respectful of others – like your mom is
                    watching. Don’t be (or contribute or share content that is)
                    malicious, obscene, intimidating, harassing, or bullying.{' '}
                  </li>
                  <li>
                    ● Keep it Legal. Don’t violate (or contribute or share
                    content that violates) the laws of your country, state,
                    province, or city (yes, we mean all the laws that apply to
                    you – this includes laws governing export control, consumer
                    protection, unfair competition, anti-discrimination, and
                    intellectual property).{' '}
                  </li>
                  <li>
                    ● Tell the Truth. Don’t post or share things that you know
                    (or suspect) aren’t accurate.
                  </li>
                  <li>
                    ● Don’t Take Stuff That Isn’t Yours. We care about authors,
                    artists, creators, inventors, and makers here. Don’t
                    infringe copyrights, trademarks, or any other intellectual
                    property right of others. Give credit where credit is due;
                    where appropriate, reference sources of information and
                    content you share, cite them accurately, and obtain any
                    necessary permissions.{' '}
                  </li>
                  <li>
                    ● Lock it Up. Don’t disclose confidential information that
                    you don’t have the right to disclose. Keep your personal
                    information (such as name, phone number, address, password)
                    private, and don’t ask anyone else to reveal personal
                    information.{' '}
                  </li>
                  <li>
                    ● Own it. You–and not Prodotype–are solely responsible for
                    all your activities and the content you contribute or share
                    in any Prodotype Environment. Prodotype is not responsible
                    for the results of activities of other participation in any
                    Prodotype Environment (including any content they may have
                    contributed or shared).{' '}
                  </li>
                  <li>
                    ● The Rules Still Apply. In addition to these Guidelines,
                    your activity in Prodotype Environments is governed by the
                    applicable terms of use and the Prodotype Privacy Statement.
                    You might also be a party to other agreements with
                    Prodotype– those agreements still apply.
                  </li>
                </ul>
                <br />
                <strong style={{ color: '#ea1818' }}>
                  What Happens if You Don’t Follow these Guidelines?
                </strong>
                <br />
                <p className='terms-text text-white text-justify mb-5'>
                  In short: you might get voted off the island. What does that
                  mean? It means Prodotype reserves the right (but have no
                  obligation) to terminate your participation in (and/or block
                  your access to) the relevant Prodotype Environment if you
                  violate these Guidelines – in letter or in spirit. We also
                  reserve the right (but have no obligation) to remove from any
                  Prodotype Environment any content or submission that violates
                  these Guidelines – again, in our own judgement and whether the
                  violation is in letter, or in spirit.{' '}
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

export default Participants;
