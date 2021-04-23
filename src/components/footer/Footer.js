import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <h4>E-commerce</h4>
            <section>
                <article>
                    <ul>
                        <li className='list'>Condition et Usage</li>
                        <li><Link to='/'>Conditions générales d'utilisation</Link></li>
                        <li><Link to='/'>Conditions générales de vente</Link></li>
                        <li><Link to='/'>Mentions légales</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                </article>
                <article>
                    <ul>
                        <li className='list'>Suivez nous sur</li>
                        <li><FontAwesomeIcon icon={faFacebook} className='fontAwsome' /><Link to='/'>Facebook</Link></li>
                        <li><FontAwesomeIcon icon={faTwitter} className='fontAwsome' /><Link to='/'>Twitter</Link></li>
                        <li><FontAwesomeIcon icon={faInstagram} className='fontAwsome' /><Link to='/'>Instagram</Link></li>
                    </ul>
                </article>
            </section>
        </footer>
    )
}

export default Footer;
