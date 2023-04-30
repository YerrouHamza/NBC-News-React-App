import './home.scss'; // import the style

// import the components
import Navbar from '../../components/navbar/Navbar';
import MainNews from '../../Posts/main-news/MainNews';
import NewsBar from '../../components/news-bar/newsBar';

function home() {
  return <>
    <Navbar />
    <header className="home">
      <MainNews />
    </header>
    <NewsBar />
    <section className='news-post'>
      
    </section>

  </>
}

export default home