import {useContext, useEffect, useState} from 'react';

import './newsFilter.scss'; // import style
import NewsLocation from '../../components/news-location/newsLocation';

import { NewsContext } from '../../NewsContext';

function NewsFilter() {
    const [data, setData] = useContext(NewsContext); // get data from context

    const [maxNews, setMaxNews] = useState(4)
    const [isActive, setIsActive] = useState(false)


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
                    <li className='item'><a href="#" className='active'>Latest Stories</a></li>
                    <li className='item'><a href="#" className=''>Think</a></li>
                    <li className='item'><a href="#" className=''>Health</a></li>
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
                { data ? data.slice(0, maxNews).map( news => (
                    <div className="card" key={news.id}>
                        <img src={news.image} alt="" />
                        <div className="card-body">
                            <div className="card-head">
                                <h4 className='card-title'>{news.title}</h4>
                                <p className='card-text'>{news.text}</p>
                            </div>
                            <div className="card-footer">
                                <p className='card-author'>{news.author ? news.author : 'Anonymous'}</p>
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