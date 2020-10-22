import React, {useEffect, useState} from "react";
import lang from '../../lang/en/main.json';
import "./Special.scss";

function Special () {
    const [timeInterval, setTimeInterval] = useState(null);
    const [days, setDays] = useState(0);
    const [hr, setHr] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(function (){
        const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
        initializeClock('timer', deadline);

        return function (){
            clearInterval(timeInterval);
        }
    },[]);

    function getTimeRemaining(endTime) {
        const total = Date.parse(endTime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endTime) {
        function updateClock() {
            const t = getTimeRemaining(endTime);

            setDays(t.days);
            setHr(('0' + t.hours).slice(-2));
            setMin(('0' + t.minutes).slice(-2));
            setSec(('0' + t.seconds).slice(-2));

            if (t.total <= 0) {
                clearInterval(timeDataInterval);
            }
        }

        updateClock();
        const timeDataInterval = setInterval(updateClock, 1000);
        setTimeInterval(timeDataInterval);
    }

    return (
        <section id={"special"}>
            <div className={"special-container"}>
                <div className={"special-main-container container"}>
                    <div className={"special-block"}>
                        <div className={"special-content row"}>
                            <div className={"col-7"}>
                                <h3 className={"special-sub-title"}>{lang.special_offer}</h3>
                                <h3 className={"special-title"}>{lang.unique_opportunity}</h3>
                                <p className={"special-text"}>{lang.special_offer_text}</p>
                                <div id={"timer"} className={"special-timer"}>
                                    <span className={"timer-block"}>
                                        <span className={"days"}>
                                            {days}
                                        </span>
                                         days
                                    </span>
                                    <span className={"timer-block"}>
                                        <span className={"hours"}>
                                            {hr}
                                        </span>
                                         hr
                                    </span>
                                    <span className={"timer-block"}>
                                        <span className={"minutes"}>
                                            {min}
                                        </span>
                                         min
                                    </span>
                                    <span className={"timer-block"}>
                                        <span className={"seconds"}>
                                            {sec}
                                        </span>
                                         sec
                                    </span>
                                </div>
                                <p>
                                    <a href="/#contact-us">Contact now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Special;