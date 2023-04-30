import './home.scss'; // import the style

// import the components
import Navbar from '../../components/navbar/Navbar'
import MainPost from '../../Posts/post-main/mainPost'
import NewsBar from '../../components/news-bar/newsBar';

function home() {
  return <>
    <Navbar />
    <header className="home">
      <MainPost />
      <NewsBar />
    </header>
  </>
}

export default home