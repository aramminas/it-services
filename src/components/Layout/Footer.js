import React from 'react';
import lang from '../../lang/en/main.json';

function Footer() {
    const data = new Date().getFullYear();

    return (
        <footer className={"footer"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"footer-block col-s-12"}>
                        <p>
                            <span>
                                © smarter solutions {data}
                            </span>
                        </p>
                        <p>
                            <span className="footer-heading">{lang.follow_us}</span>
                            <a href="https://www.facebook.com/" className="social"><span className="icon-facebook"/></a>
                            <a href="https://twitter.com/" className="social"><span className="icon-twitter"/></a>
                            <a href="https://www.instagram.com/" className="social"><span className="icon-instagram"/></a>
                            <a href="https://www.linkedin.com/" className="social"><span className="icon-linkedin"/></a>
                        </p>
                    </div>
                    <div className={"footer-block col-s-12"}>
                        <p>
                            <span>
                                {lang.footer_text} <a href={`mailto:${lang.email_address}`}>{lang.email_address}</a>
                            </span>
                        </p>
                        <p>
                            <span>
                                <span className="icon-phone-square"/> {lang.phone}: <span className={"contact-phone"}>{lang.contact_phone}</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;