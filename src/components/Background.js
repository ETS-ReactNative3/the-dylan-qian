import React, { Component } from 'react';
import '../scss/global.scss';
import '../scss/Background.scss';


class Background extends Component {
  render() {
    return (
      <section className="section background">
        <div className="section__title">Background</div>
        <div className="section__content">
          <p>
            I'm currently an Associate Engineering Manager and Senior Software Engineer at <a className="underline-link" href="https://www.hackreactor.com/"> OneLogin </a> leading
            a group of 8 engineers and building applications that allow companies easily and securely access their apps and build their own login pages for their customers.
          </p>
          <p>
            I graduated from <a className="underline-link" href="https://msem.engineering.jhu.edu/">the M.S in Engineering Management Program </a> at <strong> Johns Hopkins University</strong> in 2017.
            After working as a Business Consultant after graduation, I found my passion in creating and optimizing web applications, which has always been something I wanted to pursue during college and grad school.
          </p>

          <p>
            As a software engineer, I enjoy bridging the gap between engineering and business &mdash; combining my technical expertise
            and management background to create applications that target real world problems. Even though the tech industry is becoming more saturated, 
            I still believe that there are tons of <a className="underline-link" href="https://en.wikipedia.org/wiki/Blue_Ocean_Strategy">Blue Oceans</a> out there for me to discover.
          </p>

          <p>
            When I'm not in front of a computer, I'm probably dancing, looking for new restaurants,
            or taking pictures for my friends.
          </p>
        </div>
      </section>
    );
  }
}

export default Background;