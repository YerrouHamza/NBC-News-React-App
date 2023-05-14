import {useEffect, useState} from 'react';
import axios from 'axios';

import NewsLocation from '../../components/news-location/newsLocation';


function NewsFilter() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [maxNews, setMaxNews] = useState(4)

    const [isActive, setIsActive] = useState(false)


    const ApiKey = '9bea390d002b45ef8bc2fe3577e52a39';
    const Search = 'appel'

    
    // get date and change it to the last 3 days ago date
    const date = new Date()
    date.setDate(date.getDate() - 3);
    const oldDate = date.toLocaleDateString().toLocaleString()
    
    // the localstorage
    const getNewsDataFromLS = JSON.parse(localStorage.getItem('newsData'))
    
    useEffect(() => {
        if(localStorage.getItem('newsData')) {
            setData(getNewsDataFromLS); // set the data on the main news state
            // console.log(1)
        } else {
            // get news data from news from API 
            axios.get(`https://api.worldnewsapi.com/search-news?api-key=${ApiKey}&earliest-publish-date=${oldDate}&number=10`)
            .then(Response => {
                localStorage.setItem("newsData", JSON.stringify(Response.data.news));
                setData(Response.data.news); // set data from localstorage
            }).catch(error => {
                console.log(error)
            })
            // console.log(2)
        }
    }, []);

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
                {maxNews === 8 ? <a href="" className='btn btn-border'>View All News</a> : <button className='btn btn-border' onClick={handelNewsPostsCount}>Veiw More</button> }
            </div>
        </div>
        <div className="aside-bar">
            <NewsLocation />
        </div>
    </section>   
}

export default NewsFilter