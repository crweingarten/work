import React from 'react'
import '../work.css'
import { HashLink } from 'react-router-hash-link';

function Name(){
    return (
        <React.Fragment>
            <div class="container"></div>
            <div className="name-box pad" align="center">
                {/* PLZ HOLD */}
            {/* <div className="home-ital-sm" align="left">click me<span>↓</span></div> */}
            <div className="name">CHRISTOPHER WEINGARTEN</div>
            <div className="home-ital" align="right">full stack web developer | reactJS | nodejs | design</div>
            </div>

            <div className="pad">
            <div className="row">
            <div className="col-7"></div>
            <div className="ul" align="right">
            <HashLink  to={{hash: "work"}} className="work-contact">work</HashLink >
            <span className="work-contact line">|</span>
            <HashLink  to={{hash: "contact"}} className="work-contact">contact</HashLink >
                </div></div></div>
            
            </React.Fragment>
        )
    }


export default Name