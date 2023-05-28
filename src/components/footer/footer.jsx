import './footer.scss';

import whiteLogo from '../../assets/img/white-logo.svg'; // get the white logo

function footer() {
  return (
    <footer>
        <div className="container">
            <div className="col-1">
                <img src={whiteLogo} alt="" />
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
                    <li className='animation-underline'><a href="#">About</a></li>
                    <li className='animation-underline'><a href="#">Contact</a></li>
                    <li className='animation-underline'><a href="#">Careers</a></li>
                    <li className='animation-underline'><a href="#">Coupons</a></li>
                </ul>
                <ul className='social-links'>
                    <li className='link'>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github-filled" width="35" height="35" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor"></path>
                            </svg>
                        </a>
                    </li>
                    <li className='link'>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="35" height="35" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                <path d="M8 11l0 5"></path>
                                <path d="M8 8l0 .01"></path>
                                <path d="M12 16l0 -5"></path>
                                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                            </svg>
                        </a>
                    </li>
                    <li className='link'>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-brand-codepen" width="35" height="35" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
                                <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
                                <path d="M3 9l0 6"></path>
                                <path d="M21 9l0 6"></path>
                                <path d="M12 3l0 6"></path>
                                <path d="M12 15l0 6"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default footer