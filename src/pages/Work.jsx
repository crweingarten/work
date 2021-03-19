import React from 'react'
import '../work.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import {faGithub } from '@fortawesome/free-brands-svg-icons'


function Work(){
    return (
<React.Fragment>
<div id="work" />
<div className="pad" />


<div className="container">
<div className="col-12 work-contact no-hover" align="right">ipecac recordings</div>
<div className="row">
<div className="col-6"/>
<div className="col-6 sub-ital mb-2" align="right">Comprehensive redesign and full admin overhaul for independent record label with 20+ years of history and at least one platinum band.</div>
<div className="col-12" align="right"><span className="mr-3">
    test site: <a href="https://ipecac.herokuapp.com/" className="mx-2 work-contact" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLaptopCode} /></a></span>
    github: <a href="https://github.com/crweingarten/ipecac" className="mx-2 work-contact" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>

</div>
<img src="https://i.imgur.com/9EzxPkB.png" alt="ipecac-home" className="img"></img>
<img src="https://i.imgur.com/E5mNcen.png" alt="ipecac-artist" className="img mt-5"></img>
    </div>

<div className="container pad">
<div className="col-12 work-contact no-hover" align="right">hublink</div>
<div className="row">
<div className="col-6"/>
<div className="col-6 sub-ital mb-2" align="right">Admin and client-facing work for an online information-handling service.</div>
<div className="col-12" align="right">
    test site: <a href="https://hublink.azurewebsites.net/" className="mx-2 work-contact" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLaptopCode} /></a></div>
<img src="https://i.imgur.com/Ke4fhcD.png" alt="hublink-home" className="img"></img>
    
    </div></div>
    
    </React.Fragment>
  )}

    export default Work