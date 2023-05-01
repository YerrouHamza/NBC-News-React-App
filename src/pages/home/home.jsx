import './home.scss'; // import the style

// import the components
import Navbar from '../../components/navbar/Navbar';
import MainNews from '../../Posts/main-news/MainNews';
import NewsBar from '../../components/news-bar/newsBar';
import NewsFilter from '../../Posts/news-filter/NewsFilter';

function home() {
  return <>
    <Navbar />
    <header className="home">
      <MainNews />
    </header>
    <NewsBar />
    <section className='news-post'>
      <NewsFilter />
    </section>

  </>
}

export default home