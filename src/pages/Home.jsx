import React from 'react';
import Header from '../components/header';
import porto1 from '../assets/img/porto1.png';
import porto2 from '../assets/img/porto2.png';
import porto3 from '../assets/img/porto3.png';
import porto4 from '../assets/img/porto4.png';
import aboutme from '../assets/img/aboutme.png';
import { URL_LOCALHOST } from '../helper/url';
import { BiDownload } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const portofolio = [
    {
        img: porto1
    },
    {
        img: porto2
    },
    {
        img: porto3
    },
    {
        img: porto4
    }
]

const Home = () => {
    const portoMap = () => {
        return portofolio.map((val, i) => {
            return (
                <div className={`showcase-${i+1}`}>
                    <a href={`${URL_LOCALHOST}/porto${i+1}`}><img src={val.img} alt="showcase"/></a>
                    <div className={`showcase-${i+1}-text`}>
                        <div className={`showcase-${i+1}-text-1`}>
                            Marketing Website
                        </div>
                        <div className={`showcase-${i+1}-text-2`}>
                            Pellentesque senectus risus consectetur et sed purus sed.
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <Header/>
            <div className="intro">
                <div className="intro-1">
                    Hello, I'm
                </div>
                <div className="intro-2">
                    Michael Max
                </div>
                <div className="intro-3">
                    Frontend developer | UI/UX Enthusiast
                </div>
            </div>
            <div className="showcase" id="portofolio">
                {portoMap()}
                {/* <div className="showcase-1">
                    <a href={URL_LOCALHOST}><img src={porto1} alt="showcase"/></a>
                    <div className="showcase-1-text">
                        <div className="showcase-1-text-1">
                            Marketing Website
                        </div>
                        <div className="showcase-1-text-2">
                            Pellentesque senectus risus consectetur et sed purus sed.
                        </div>
                    </div>
                </div>
                <div className="showcase-2">
                    <a href={`${URL_LOCALHOST}/porto2`}><img src={porto2} alt="showcase"/></a>
                    <div className="showcase-2-text">
                        <div className="showcase-2-text-1">
                            Marketing Website
                        </div>
                        <div className="showcase-2-text-2">
                            Pellentesque senectus risus consectetur et sed purus sed.
                        </div>
                    </div>
                </div>
                <div className="showcase-3">
                    <a href={URL_LOCALHOST}><img src={porto3} alt="showcase"/></a>
                    <div className="showcase-3-text">
                        <div className="showcase-3-text-1">
                            Marketing Website
                        </div>
                        <div className="showcase-3-text-2">
                            Pellentesque senectus risus consectetur et sed purus sed.
                        </div>
                    </div>
                </div>
                <div className="showcase-4">
                    <a href={URL_LOCALHOST}><img src={porto4} alt="showcase"/></a>
                    <div className="showcase-4-text">
                        <div className="showcase-4-text-1">
                            Marketing Website
                        </div>
                        <div className="showcase-4-text-2">
                            Pellentesque senectus risus consectetur et sed purus sed.
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="about" id="about">
                <div className="about-text">
                    About
                </div>
                <div className="about-bio">
                    <div className="about-bio-image">
                        <img src={aboutme} alt="aboutme"/>
                    </div>
                    <div className="about-bio-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id saepe, maxime rem earum aut consectetur velit possimus sunt provident ipsam excepturi enim quia numquam totam! Voluptatum nesciunt vitae eligendi eius fugiat. Dolor suscipit soluta rem laboriosam ullam optio officia aspernatur. Tenetur consectetur corporis reiciendis reprehenderit quisquam. Ullam nam quas nesciunt.
                        <br/><br/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, eum eos rerum saepe ipsa alias libero recusandae sunt nesciunt commodi ad sequi cupiditate nam, consequatur consequuntur beatae asperiores ea eaque ducimus quo sed aspernatur voluptatem deleniti! Provident necessitatibus assumenda itaque dignissimos doloribus totam hic consectetur iste tenetur! Temporibus, dignissimos ea.
                    </div>
                    <div className="about-bio-resume">
                        <a href={URL_LOCALHOST}><BiDownload /> Get full resume (pdf, 300kb)</a>
                    </div>
                </div>
            </div>
            <div className="footer" id="contact">
                <div className="footer-1">
                    Get to know more
                </div>
                <div className="footer-2">
                    <AiOutlineMail /> mikedanzon@gmail.com
                    <br/><br/>
                    <FiLinkedin /> linkedin.com/in/mikedanzon
                    <br/><br/>
                    <FiGithub /> github.com/mikedanzon
                    <br/><br/>
                    <FiInstagram /> instagram.com/mikedanzon
                </div>
            </div>
        </>
    )
}

export default Home;