// import { useState } from 'react';

import './home.scss'; // import the style

// import the components
import Navbar from '../../content/navbar/Navbar';
import MainNews from '../../Posts/main-news/MainNews';
import NewsBar from '../../Posts/news-bar/NewsBar';
import NewsFilter from '../../Posts/news-filter/NewsFilter';
import NewsSlider from '../../Posts/news-slider/NewsSlider';
import Footer from '../../content/footer/footer';

function Home() {
  return <main className='home'>
    <Navbar />
    <header className="haeder">
      <MainNews/>
    </header>
    <NewsBar />
    <NewsFilter />
    <NewsSlider />
    <Footer />
  </main>
}

export default Home