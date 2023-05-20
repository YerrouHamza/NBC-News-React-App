// import { useState } from 'react';

import './home.scss'; // import the style

// import the components
import Navbar from '../../components/navbar/Navbar';
import MainNews from '../../Posts/main-news/MainNews';
import NewsBar from '../../components/news-bar/newsBar';
import NewsFilter from '../../Posts/news-filter/NewsFilter';
import NewsSlider from '../../Posts/news-slider/NewsSlider';

function Home() {
  return <main className='home'>
    <Navbar />
    <header className="haeder">
      <MainNews/>
    </header>
    <NewsBar />
    <NewsFilter />
    <NewsSlider />
  </main>
}

export default Home