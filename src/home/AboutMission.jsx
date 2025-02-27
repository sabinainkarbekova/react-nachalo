import React from 'react';


function AboutMission() {
    return (
        <section className="about-mission">
            <div className="top-bar"></div>
            <div className="container">
                <div className="about-box">
                    <h3>ABOUT US</h3>
                    <h2>We are a community of content writers who share their learnings</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a 
                        href="www" 
                        className="read-more">
                        Read More &gt;
                    </a>
                </div>
                <div className="mission-box">
                    <h3>OUR MISSION</h3>
                    <h2>Creating valuable content for creatives all around the world</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div class="pattern"></div>
        </section>
    );
}

export default AboutMission;
