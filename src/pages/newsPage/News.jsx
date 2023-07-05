import {useState, useContext, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

import { NewsContext } from '../../NewsContext'; // import the data from the context state

import './news.scss' // import News the style

// import the components
import Navbar from '../../components/navbar/Navbar';
import ControlBar from '../../components/control-bar/controlBar';
import Footer from '../../components/footer/footer';
import NewsPost from '../../components/newsPosts/NewsPost';

import SkeletonPost from '../../components/skeleton/SkeletonPost'; // import the skeleton post
import SkeletonMainPost from '../../components/skeleton/SkeletonMainPost';

import NewsHorizontalPost from '../../components/newsPosts/NewsHorizontalPost';

function News() {
    const { category } = useParams();

    const {country} = useContext(NewsContext); // get the context country
    const [data, setData] = useState([]);
    const [newscategory, setNewsCategory] = useState('')
    const [loaded, setLoaded] = useState(false)

    const [maxNews, setMaxNews] = useState(19);
    const [displayButton, setDisplayButton] = useState(true)

    useEffect(() => {
      setNewsCategory(category)
    }, [category])
    
    
    const ApiKey = 'afe532d07ba148329362cacae6343b5e'; // api key
    useEffect(() => {
      axios.get(`https://newsapi.org/v2/top-headlines?category=${newscategory}&country=${country}&pageSize=${maxNews}&apiKey=${ApiKey}`)
      .then(Response => {
        const articles = Response.data.articles
        setData(articles)
        setTimeout(() => {
          setLoaded(Response.data ? true : false)
        }, 1000);
      }).catch(error => {
        console.log(error)
      })
      
      return() => {
        setData('')
        setLoaded(false)
        console.log('')
      } 
    }, [newscategory, country, maxNews])


    const handelGetMoreNews = (e) => {
      if(maxNews === 100) {
        setDisplayButton(false)
      } else {
        setMaxNews(maxNews + 11)
      }
    }


  return (
    <main className='news-page'>
      <Navbar activeItem={newscategory} />
      <ControlBar />
      <section>
        {
          loaded ? data.slice(0, 1).map((news, index) => (
            <NewsHorizontalPost 
              image={news.urlToImage}
              title={news.title}
              description={news.description}
              creator={news.creator}
              url={news.url}
              tag={category}
              index={index} 
            />
          ))
          : <SkeletonMainPost tag={category} />
        }
      </section>
      <section className='news-section'>
        <div className='posts'>
          {loaded ? data.slice(1, maxNews).map( (news, index) => (
            <NewsPost 
                index={index}
                image={news.urlToImage}
                title={news.title}
                description={news.description}
                creator={news.creator}
                url={news.url}
            />
          )) : [...Array(maxNews - 1)].map((i) =>
              <SkeletonPost key={i} />
            )
          }
        </div>
        <button class={displayButton ? "btn btn-border btn-primary" : "btn btn-border btn-primary display"} onClick={handelGetMoreNews}>
          {displayButton ? 'Veiw More News' : 'No More News!!'}
        </button>
      </section>
      <Footer />
    </main>
  )
}

export default News