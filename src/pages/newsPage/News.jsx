import {useState, useContext, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './news.scss' // import the style

import { NewsContext } from '../../NewsContext';

// import the components
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import NewsPost from '../../components/newsPosts/NewsPost';
import SkeletonPost from '../../components/skeleton/SkeletonPost';

function News() {
    const { category } = useParams();

    const {country} = useContext(NewsContext); // get the context country
    
    const [data, setData] = useState([]);
    const [newscategory, setNewsCategory] = useState('Business')
    const [loaded, setLoaded] = useState(false)
    
    const [maxNews, setMaxNews] = useState(20);

    useEffect(() => {
      setNewsCategory(category)
    }, [category])
    
    
    const ApiKey = 'afe532d07ba148329362cacae6343b5e'; // api key
    useEffect(() => {
        setLoaded(false)
        axios.get(`https://newsapi.org/v2/top-headlines?category=${newscategory}&country=${country}&apiKey=${ApiKey}`)
        .then(Response => {
            const articles = Response.data.articles

            setTimeout(() => {
                setData(articles)
                setLoaded(Response.data ? true : false)
            }, 1000);
        }).catch(error => {
            console.log(error)
        })
    }, [newscategory, country])


  return (
    <main className='news-page'>
      <Navbar activeItem={newscategory} />
      <section className='posts'>
        {loaded ? data.slice(0, maxNews).map( (news, index) => (
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
      </section>
      <Footer />
    </main>
  )
}

export default News