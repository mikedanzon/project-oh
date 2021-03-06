import React from 'react';
import Header from '../../components/header';
import { URL_LOCALHOST } from '../../helper/url';
import porto1 from '../../assets/img/porto1.png';
import porto22 from '../../assets/img/porto2-2.png';
import { BiArrowBack, BiGlobe, BiWrench } from 'react-icons/bi';

function PortoTwo() {
    return (
        <>
            <Header/>
            <div className="project-2">
                <div className="project-2-back">
                    <a href={URL_LOCALHOST}><BiArrowBack /> Back</a>
                </div>
                <div className="project-2-title">
                    Marketing Website
                </div>
                <div className="project-2-links">
                    <span className="pr-4"><a href={URL_LOCALHOST}><BiGlobe /> https://www.lovenest.com.sg/</a></span>
                    <span className="pl-4"><a href={URL_LOCALHOST}><BiWrench /> React, GraphQL</a></span>
                </div>
                <div className="project-2-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dicta fugit consequuntur praesentium a, tenetur adipisci debitis culpa, porro sequi dolor illum. Ipsum numquam beatae qui sint esse dolore, nostrum pariatur, ut, sed ullam dolorum doloremque dignissimos ab sit! Molestiae fuga impedit dicta vel nulla labore neque nostrum, possimus totam?
                </div>
            </div>
            <div className="project-2-footer">
                <div className="project-2-footer-1">
                    <img src={porto22} alt="porto"/>
                </div>
                <div className="project-2-footer-2">
                    <img src={porto1} alt="porto"/>
                </div>
            </div>
        </>
    )
}

export default PortoTwo;