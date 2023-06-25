import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { NewsContext } from '../../NewsContext'; // import the data from the context state

import './navbar.scss'; // import the Navbar style
import logo from '../../assets/nbc-logo.svg'; // import the logo
import { IconMenu2, IconSearch, IconUserCircle } from '@tabler/icons-react'; // import the icons form the https://tabler-icons.io/ // import the icons form the https://tabler-icons.io/

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
            <IconUserCircle />
          </a>
          <a href="#" className='search'>
            <IconSearch />
          </a>
          <a href="#" className='more-tools' onClick={handelOpenGlobalSettings}>
            <IconMenu2 />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar