import { useState, useContext, useEffect } from 'react';

import { Link } from 'react-router-dom'

import './navbar.scss'
import logo from '../../assets/nbc-logo.svg'

import { NewsContext } from '../../NewsContext'; // import the data from the context state
 // import the data from the context state

function Navbar({activeItem}) {
  
  
  const [activeCategory, setActiveCategory] = useState()
  const {globalSettings, setGlobalSettings} = useContext(NewsContext);
  
  const handelOpenGlobalSettings = () => {
    setGlobalSettings(true)
  }

  useEffect(() => {
    setActiveCategory(activeItem)
  }, [activeItem])
  
  
  return (
    <nav className='navbar'>
      <div className="navbar-content">
        <Link to='/' className="logo">
          <img src={logo} alt="NBC Logo" />
        </Link>
        <nav className='menu'>
          <ul className='navlist'>
            <li>
              <Link to='/news/business' className={ activeCategory == 'business' ? 'navlist-item animation-underline active' : 'navlist-item animation-underline'} href="#">Business</Link>
            </li>
            <li>
              <Link to='/news/entertainment' className={ activeCategory === 'entertainment' ? 'navlist-item animation-underline active' : 'navlist-item animation-underline'} href="#">Entertainment</Link>
            </li>
            <li>
              <Link to='/news/general' className={ activeCategory === 'general' ? 'navlist-item animation-underline active' : 'navlist-item animation-underline'} href="#">General</Link>
            </li>
            <li>
              <Link to='/news/health' className={ activeCategory === 'health' ? 'navlist-item animation-underline active' : 'navlist-item animation-underline'} href="#">Health</Link>
            </li>
            <li>
              <Link to='/news/science' className={ activeCategory === 'science' ? 'navlist-item animation-underline active' : 'navlist-item animation-underline'} href="#">Science</Link>
            </li>
            <li>
              <Link to='/news/sports' className={ activeCategory === 'sports' ? 'navlist-item animation-underline active' : 'navlist-item animation-underline'} href="#">Sports</Link>
            </li>
            <li>
              <Link to='/news/technology' className={ activeCategory === 'technology' ? 'navlist-item animation-underline active' : 'navlist-item animation-underline'} href="#">Technology</Link>
            </li>
          </ul>
        </nav>
        <div className="tools">
          <a href="#" className='profile'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
            </svg>
          </a>
          <a href="#" className='search'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
          </a>
          <a href="#" className='more-tools' onClick={handelOpenGlobalSettings}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar