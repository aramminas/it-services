import React from 'react';
import lang from '../../lang/en/main.json';
import './About.scss';

function About() {
    return (
        <section id={"about"}>
            <div className={"about-container"}>
                <div className={"about-bg"}>
                    <div className={"about-main-container container"}>
                        <div className={"about-title"}>
                            <p>
                            <span>
                                <q>{lang.about_title}</q>
                            </span>
                            </p>
                        </div>
                        <div className={"about-desc row"}>
                            <div className={"col col-6 col-s-12 about-text"}>
                                <div>
                                    <p>{lang.about_text}</p>
                                    <p>{lang.about_text_1}</p>
                                    <p>{lang.about_text_2}</p>
                                </div>
                            </div>
                            <div className={"col col-6 col-s-12 about-image"}>
                                <figure>
                                    <img src="/images/it-services-team.jpg" alt="team"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;