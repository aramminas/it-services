import React from 'react';
import lang from '../../lang/en/main.json';
import './Home.scss';

function Home() {
    return (
        <section id={"home"}>
            <div className={"home-container"}>
                <div className={"home-main-container container"}>
                    <div className={"home-proverb"}>
                        <p>
                            <span>
                               <q>{lang.proverb}</q>
                            </span>
                        </p>
                    </div>
                    <div className={"home-main-text"}>
                       <p>
                           <span>
                                {lang.main_text}
                           </span>
                       </p>
                    </div>
                    <div className={"home-action"}>
                        <button className={"btn btn-red"}><a href="#services">{lang.services}</a></button>
                        <button className={"btn btn-green"}><a href="#contact-us">{lang.contact_us}</a></button>
                    </div>
                    <div className={"home-bg-min"} >
                        <img src="/images/home-min-bg.jpg" alt="bg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;