import React, {useState} from 'react';
import data from '../../site-data';
import lang from '../../lang/en/main.json';
const navbar = data.navbar;

function Navbar() {

    const [cross, setCross] = useState(false);

    function toggle(){
        setCross(!cross);
    }

    return (
        <div className={"navbar-container"}>
            <nav className={"header-navigation"}>
                <ul>
                    { navbar.map(item => (
                        <li key={item.href}><a href={`#${item.href}`}>{lang[item.name]}</a></li>
                      ))
                    }
                </ul>
            </nav>
            <div className={"btn-content"}>
                <div id="liners" onClick={toggle} className={cross ? "cross" : ""}>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
            <nav className={`mainMenu ${cross ? "act" : ""}`}>
                <ul>
                    { navbar.map(item => (
                        <li key={item.href} onClick={toggle}><a href={`#${item.href}`}>{lang[item.name]}</a></li>
                      ))
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;