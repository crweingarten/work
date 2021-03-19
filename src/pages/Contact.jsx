import React from 'react'
import '../work.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'



function Contact(){
    return (
    <React.Fragment>
        <div>
        <div className="pad" id="contact" align="center"> 
        <a href="mailto: crweingarten@gmail.com" className="mx-2 work-contact"><FontAwesomeIcon  icon={faEnvelope} /></a>
        <a href="https://www.linkedin.com/in/christopherrweingarten/" className="mx-2 work-contact" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/crweingarten" className="mx-2 work-contact" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        </div>

    </React.Fragment>)
    }

export default Contact