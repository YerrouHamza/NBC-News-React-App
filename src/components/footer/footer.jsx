import { Link } from 'react-router-dom'; // import react router

import './footer.scss'; // import the footer style
import whiteLogo from '../../assets/img/white-logo.svg'; // import the white logo
import { IconBrandLinkedin, IconBrandGithub, IconBrandCodepen } from '@tabler/icons-react';

function footer() {
  return (
    <footer>
        <div className="container">
            <div className="col-1">
                <Link to='/'>
                    <img src={whiteLogo} alt="NBC White Logo" />
                </Link>
                <p>copyright &copy; 2020 | NBC NEWS</p>
            </div>

            <div className="col-2">
                <ul>
                    <li className='animation-underline'><a href="#">Privacy Policy</a></li>
                    <li className='animation-underline'><a href="#">Do not sell my personal info</a></li>
                    <li className='animation-underline'><a href="#">Terms of Service</a></li>
                    <li className='animation-underline'><a href="#">nbcnews.com Site Map</a></li>
                </ul>
            </div>

            <div className="col-3">
                <ul className='home-links'>
                    <li className='animation-underline'><Link to='/about' href="#">About</Link></li>
                    <li className='animation-underline'><Link to='/contact' href="#">Contact</Link></li>
                    <li className='animation-underline'><Link to='/Careers' href="#">Careers</Link></li>
                    <li className='animation-underline'><Link to='/Coupons' href="#">Coupons</Link></li>
                </ul>
                <ul className='social-links'>
                    <li className='link'>
                        <a href="https://github.com/YerrouHamza" target='_blanck'>
                            <IconBrandLinkedin />
                        </a>
                    </li>
                    <li className='link'>
                        <a href="https://www.linkedin.com/in/hamza-yerrou-769a2b214/" target='_blanck'>
                            <IconBrandGithub />
                        </a>
                    </li>
                    <li className='link'>
                        <a href="https://codepen.io/yerrouhamza" target='_blanck'>
                            <IconBrandCodepen />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default footer