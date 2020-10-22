import React, {useState} from 'react';
import Zoom from 'react-reveal/Zoom';
import lang from '../../lang/en/main.json';
import './Services.scss';
import data from '../../site-data';
const ser1 = data.services_first;
const ser2 = data.services_second;

function Services() {

    const [ser, setSer] = useState(0);
    const [show, setShow] = useState(true);
    const [showSec, setShowSec] = useState(true);

    const showDescription = (id, col) => {
        setSer(id);
        col === 1 ? setShow(false) : setShowSec(false);
    };

    const hideDescription = (col) => {
        setSer(0);
        col === 1 ? setShow(true) : setShowSec(true);
    };

    return (
        <section id={"services"}>
            <div className={"services-container"}>
                <div className={"services-container container"}>
                    <div className={"services-title"}>
                        <p>
                            <span>
                                {lang.services_title}
                            </span>
                        </p>
                    </div>
                    <div className={"services-content row"}>
                        <div className={"col-4 col"}>
                            { ser1.map(function (val) {
                                return (
                                    <React.Fragment key={val.item}>
                                        {ser === val.id ?
                                            <Zoom cascade>
                                                <div className={"services-desc-block"} onMouseLeave={() => hideDescription(1)}>
                                                    <div className={"services-img"}>
                                                        <img src={`/images/icons/${val.img}`} alt="services"/>
                                                    </div>
                                                    <h3 className={"services-title"}>{lang[`title_${val.id}`]}</h3>
                                                    <div className={"services-desc"}>{lang[`desc_${val.id}`]}</div>
                                                </div>
                                            </Zoom>
                                            :
                                            <Zoom when={show}>
                                                <div className={"services-items row"} key={val.item} onMouseEnter={() => showDescription(val.id, 1)}>
                                                    <div className={"services-item-desc col col-10 left-items"}><p>
                                                        <span>{lang[`services_item_${val.id}`]}</span></p></div>
                                                    <div className={"col col-2 min-hide"}>
                                                        <figure>
                                                            <img src="/images/dot.png" alt="services"/>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        }
                                    </React.Fragment>
                                )
                             })
                            }
                        </div>
                        <div className={"col-4 col"}>
                            <div className={"services-image"}>
                                <figure>
                                    <img src="/images/services.png" alt="services"/>
                                </figure>
                            </div>
                        </div>
                        <div className={"col-4 col"}>
                            { ser2.map(function (val) {
                                return (
                                    <React.Fragment key={val.item}>
                                        {ser === val.id ?
                                            <Zoom cascade>
                                                <div className={"services-desc-block"} onMouseLeave={() => hideDescription(2)}>
                                                    <div className={"services-img"}>
                                                        <img src={`/images/icons/${val.img}`} alt="services"/>
                                                    </div>
                                                    <h3 className={"services-title"}>{lang[`title_${val.id}`]}</h3>
                                                    <div className={"services-desc"}>{lang[`desc_${val.id}`]}</div>
                                                </div>
                                            </Zoom>
                                            :
                                            <Zoom when={showSec}>
                                                <div className={"services-items row"}
                                                     onMouseEnter={() => showDescription(val.id, 2)}>
                                                    <div className={"col col-2 dot-right min-hide"}>
                                                        <figure>
                                                            <img src="/images/dot.png" alt="services"/>
                                                        </figure>
                                                    </div>
                                                    <div className={"services-item-desc col col-10"}><p>
                                                        <span>{lang[`services_item_${val.id}`]}</span></p></div>
                                                </div>
                                            </Zoom>
                                        }
                                    </React.Fragment>
                                )
                             })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;