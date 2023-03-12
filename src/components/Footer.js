import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div>
            <footer className="d-flex justify-content-center">
            <a className="mx-3" href="https://github.com/LDudrey"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
            <a className="mx-3" href="https://www.linkedin.com/in/lydiadudrey/"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a className="mx-3" href="https://stackoverflow.com/users/21372860/ldudrey"><FontAwesomeIcon icon={faStackOverflow} size="3x" /></a>
            </footer>
        </div>
    )
} 