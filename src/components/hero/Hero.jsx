import { Link } from 'react-router-dom';

import './hero.scss'

import sportsNewsBgImage from '../../assets/img/nbc-sport-news-hero.webp';
import generalNewsBgImage from '../../assets/img/nbc-general-news-hero.webp';
import businessNewsBgImage from '../../assets/img/nbc-business-news-hero.webp';
import healthNewsBgImage from '../../assets/img/nbc-health-news-hero.webp';
import technologyNewsBgImage from '../../assets/img/nbc-technology-news-hero.webp';
import scienceNewsBgImage from '../../assets/img/nbc-science-news-hero.webp';
import entertainmentNewsBgImage from '../../assets/img/nbc-entertainment-news-hero.webp';


function Hero() {
  const sportsImageBg = {
    backgroundImage: `url(${sportsNewsBgImage})`
  }
  const generalImageBG = {
    backgroundImage: `url(${generalNewsBgImage})`
  }
  const businessImageBg = {
    backgroundImage: `url(${businessNewsBgImage})`
  }
  const healthImageBG = {
    backgroundImage: `url(${healthNewsBgImage})`
  }
  const technologyImageBg = {
    backgroundImage: `url(${technologyNewsBgImage})`
  }
  const scienceImageBg = {
    backgroundImage: `url(${scienceNewsBgImage})`
  }
  const entertainmentyImageBg = {
    backgroundImage: `url(${entertainmentNewsBgImage})`
  }
  
  return <>
    <div className="hero">
      <Link to='/news/sports' className="hero-cards hero-card1" style={sportsImageBg}>
        <div className="hero-card-content">
          <h4 className='category'>Sports</h4>
          <h2 className='title'>
            Sports World in Motion: Don't Miss a Beat with Latest Updates!
          </h2>
        </div>
      </Link>

      <Link to='news/technology' className="hero-cards hero-card2" style={technologyImageBg}>
        <div className="hero-card-content">
          <h4 className='category'>Technology</h4>
          <h2 className='title'>
            Breaking the Code: Stay Informed, Embrace Technological Advances!
          </h2>
        </div>
      </Link>

      <Link to='news/Business' className="hero-cards hero-card3" style={businessImageBg}>
        <div className="hero-card-content">
          <h4 className='category'>Business</h4>
          <h2 className='title'>
            Dive into Business News Today!
          </h2>
        </div>
      </Link>

      <Link to='news/health' className="hero-cards hero-card4" style={healthImageBG}>
        <div className="hero-card-content">
          <h4 className='category'>Health</h4>
          <h2 className='title'>
            Stay Healthy, Make Informed Choices!
          </h2>
        </div>
      </Link>
      
      <div className="hero-cards hero-card5" style={generalImageBG}>
        <div className="hero-card-content">
          <h2 className='title'>
            Catch Up on Current Events: Explore the Latest General News Stories!
          </h2>
          <Link to='news/general' class="btn btn-border btn-primary btn-light">Catch Up</Link>
        </div>
      </div>

      <Link to='news/entertainment' className="hero-cards hero-card6" style={entertainmentyImageBg}>
        <div className="hero-card-content">
          <h4 className='category'>Entertainment</h4>
          <h2 className='title'>
            Lights, Camera, Action: Explore the Hottest Entertainment Updates!
          </h2>
        </div>
      </Link>

      <Link to='news/science' className="hero-cards hero-card7" style={scienceImageBg}>
        <div className="hero-card-content">
          <h4 className='category'>Science</h4>
          <h2 className='title'>
            Unlock the Mysteries of the Universe!
          </h2>
        </div>
      </Link>
    </div>
  </>
}

export default Hero