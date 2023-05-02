// import { useState } from 'react';

import './home.scss'; // import the style
import { useContext } from 'react';

// import the components
import Navbar from '../../components/navbar/Navbar';
import MainNews from '../../Posts/main-news/MainNews';
import NewsBar from '../../components/news-bar/newsBar';
import NewsFilter from '../../Posts/news-filter/NewsFilter';

import { NewsContext } from '../../newsContext';

function Home() {

  const data = useContext(NewsContext)

  console.log(data)

  return <>
    <Navbar />
    <header className="home">
      <MainNews/>
    </header>
    <NewsBar />
    <section className='news-post'>
      <NewsFilter />
    </section>
  </>
}

export default Home