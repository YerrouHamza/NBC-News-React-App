import {useContext, useEffect, useState} from 'react';
import axios from 'axios';

import './newsFilter.scss'; // import style
import NewsLocation from '../../components/news-location/newsLocation';

import { NewsContext } from '../../NewsContext';

function NewsFilter() {
    const [data, setData] = useState([]);
    const [newscategory, setNewsCategory] = useState('Think')

    const [maxNews, setMaxNews] = useState(4);
    const [isActive, setIsActive] = useState(false);


    const ApiKey = 'afe532d07ba148329362cacae6343b5e';
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${newscategory}&sortBy=relevancy&apiKey=${ApiKey}`)
        .then(Response => {
            const articles = Response.data.articles
            console.log(articles)
            setData(articles)
            setLoaded(Response.data ? true : false)
        }).catch(error => {
            console.log(error)
        })
    }, [newscategory])

    const handelNewsCategory = (e) => {
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
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'Think' ? 'active' : ''}>Think</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'Health' ? 'active' : ''}>Health</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'Finance' ? 'active' : ''}>Finance</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'Technology' ? 'active' : ''}>Technology</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'Celebrity' ? 'active' : ''}>Celebrity</a></li>
                    <li className='item'><a href="#!" onClick={handelNewsCategory} className={newscategory == 'Government' ? 'active' : ''}>Government</a></li>
                </ul>
                <button className='btn-icon layout-btn' onClick={handelNewsPostSetting}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-alt" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    {
                        isActive ?
                        <>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                            <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                        </>
                        :
                        <>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                        </>
                    }
                    </svg> 
                </button>
            </div>
            <div className={isActive ? 'posts table' : 'posts grid'}>
                { data ? data.slice(0, maxNews).map( (news, index) => (
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
                )) : <div className="card no-data">NO data</div> }
            </div>
            {maxNews === 8 ? <a href="" className='btn btn-border btn-primary'>View All News</a> : <button className='btn btn-border btn-primary' onClick={handelNewsPostsCount}>Veiw More</button> }
        </div>
        <div className="aside-bar">
            <NewsLocation />
        </div>
    </section>   
}

export default NewsFilter