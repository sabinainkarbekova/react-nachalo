import React from 'react';
import imageAboutUs from '../img/imageAboutUs.png';

function Mission() {
    return (
      <div className="MissionMain">
        <div className="MissionContainer">
            <div className="MissionTextContainer">
                <div className="MissionBlock1">
                    <p className="Cap03">ABOUT US</p>
                    <p className="HeadingH1">We are a team of content writers who share their learnings</p>
                </div>
                <div className="MissionBlock2">
                    <p className="Body1Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="MissionImageContainer">
                <img src={imageAboutUs} width="1240"  alt="Team" />
                <div className="StatsContainer">
                    <div className="StatsBlock">
                        <div className="StatsBlockIn">
                            <p className="Display">12+</p>
                            <p className="Body1Text">Blogs Published</p>
                        </div>
                        <div className="StatsBlockIn">
                            <p className="Display">18K+</p>
                            <p className="Body1Text">Views on Finsweet</p>  
                        </div>
                        <div className="StatsBlockIn"> 
                            <p className="Display">30K+</p>
                            <p className="Body1Text">Total Active Users</p>
                        </div>
                    </div>
                    <div className="StatsLines">
                        <div className="StatsLine1"></div>
                        <div className="StatsLine2"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Mission;
