import {useContext, useEffect, useState} from 'react';
import axios from 'axios';

import { NewsContext } from '../../NewsContext';

import './newsFilter.scss'; // import style
import { IconLayoutGrid, IconLayoutList } from '@tabler/icons-react'; // import the icons 

// import the components
import AsideNews from '../aside-news/asideNews';


import SkeletonPost from '../../components/skeleton/SkeletonPost';


function NewsFilter() {
    const {country} = useContext(NewsContext); // get the context country
    
    const [data, setData] = useState([]);
    const [newscategory, setNewsCategory] = useState('business')
    const [loaded, setLoaded] = useState(false)
    
    const [maxNews, setMaxNews] = useState(5);
    const [isActive, setIsActive] = useState(false);
    
    const ApiKey = 'afe532d07ba148329362cacae6343b5e';
    useEffect(() => {
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

    const handelNewsCategory = (e) => {
        setLoaded(false)
        setNewsCategory(e.target.text)
    }

    // handel the chnage post style function
    const handelNewsPostSetting = () => {
        setIsActive(!isActive)
    }
    const handelNewsPostsCount = () => {
        setMaxNews(maxNews + 4)
    }

    return <section className='news-post'>
        <div className='post-filter'>
            <div className="filter">
                <ul className='filter-items'>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'business' ? 'active' : ''}>business</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'health' ? 'active' : ''}>health</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'science' ? 'active' : ''}>science</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'sports' ? 'active' : ''}>sports</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'technology' ? 'active' : ''}>technology</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'entertainment' ? 'active' : ''}>entertainment</a></li>
                </ul>
                <button className='btn-icon layout-btn' onClick={handelNewsPostSetting}>
                    { isActive ? <IconLayoutGrid /> : <IconLayoutList /> }
                </button>
            </div>
            <div className={isActive ? 'posts table' : 'posts grid'}>
                {loaded ? data.slice(1, maxNews).map( (news, index) => (
                    <div className="card" key={index}>
                        <img src={news.urlToImage} alt="" />
                        <div className="card-body">
                            <div className="card-head">
                                <h4 className='card-title'>{news.title}</h4>
                                <p className='card-text'>{news.description}</p>
                            </div>
                            <div className="card-footer">
                                <p className='card-author'>{news.creator ? news.creator : 'Anonymous'}</p>
                                <a href={news.url} target='_blank' className='btn-clear animation-underline'>View More</a>
                            </div>
                        </div>
                    </div>
                )) : <SkeletonPost />}

                
            </div>
            {maxNews === 8 ? <a href="" className='btn btn-border btn-primary'>View All News</a> : <button className='btn btn-border btn-primary' onClick={handelNewsPostsCount}>Veiw More</button> }
        </div>
        <div className="aside-news">
            <AsideNews />
        </div>
    </section>   
}

export default NewsFilter