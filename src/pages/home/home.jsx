// import { useState } from 'react';

import './home.scss'; // import the style

// import the components
import Navbar from '../../components/navbar/Navbar';
import ControlBar from '../../components/control-bar/controlBar';
import MainNews from '../../Posts/main-news/MainNews';
import NewsBar from '../../Posts/news-bar/NewsBar';
import NewsFilter from '../../Posts/news-filter/NewsFilter';
import NewsSlider from '../../Posts/news-slider/NewsSlider';
import Footer from '../../components/footer/footer';


function Home() {
  return <main className='home'>
    test
    {/* <Navbar />
    <ControlBar />
    <header className="haeder">
      <MainNews/>
    </header>
    <NewsBar />
    <NewsFilter />
    <NewsSlider />
    <Footer /> */}
  </main>
}

export default Home