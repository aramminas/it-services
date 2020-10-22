import React from 'react';
import Form from './Form';
import lang from '../../lang/en/main.json';
import './ContactUs.scss';

function ContactUs() {
    return (
        <section id={"contact-us"}>
            <div className={"contact-us-container container"}>
                <div className={"contact-us-block"}>
                    <div className={"contact-us-title"}>{lang.contact_us_title}</div>
                    <div className={"contact-us-form"}>
                        <Form lang={lang}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;