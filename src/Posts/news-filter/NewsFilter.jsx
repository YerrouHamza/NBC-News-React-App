import {useEffect, useState} from 'react';
import axios from 'axios';

import UseAnimations from 'react-useanimations';
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import settings2 from 'react-useanimations/lib/settings2'


function NewsFilter() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const [isActive, setIsActive] = useState(false)


    const ApiKey = '9bea390d002b45ef8bc2fe3577e52a39';
    const Search = 'appel'

    // get date and change it to the last 3 days ago date
    const date = new Date()
    date.setDate(date.getDate() - 3);
    const oldDate = date.toLocaleDateString().toLocaleString()

    useEffect(() => {
        //get lsted news from API 
        axios.get(`https://api.worldnewsapi.com/search-news?api-key=${ApiKey}&earliest-publish-date=${oldDate}&number=10`)
        .then(Response => {
            console.log(Response.data.news)
            setData(Response.data.news)
            setLoaded(Response.data ? true : false)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    // handel the chnage post style function
    const handelNewsPostSetting = (e) => {
        
        setIsActive(!isActive)
        console.log(isActive)
    }

    return <div className='post-filter'>
        <div className="filter">
            <ul className='filter-items'>
                <li className='item'><a href="#" className='active'>Latest Stories</a></li>
                <li className='item'><a href="#" className=''>Think</a></li>
                <li className='item'><a href="#" className=''>Health</a></li>
            </ul>
            <button className='btn-icon' onClick={handelNewsPostSetting}>
                {
                    isActive ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-alt" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
                        <path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                        <path d="M14 12l6 0"></path>
                        <path d="M14 16l6 0"></path>
                        <path d="M14 20l6 0"></path>
                    </svg> 
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-alt" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 4h11a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-7m-4 0h-3a1 1 0 0 1 -1 -1v-2c0 -.271 .108 -.517 .283 -.697"></path>
                        <path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                        <path d="M16 12h4"></path>
                        <path d="M14 16h2"></path>
                        <path d="M14 20h6"></path>
                        <path d="M3 3l18 18"></path>
                    </svg>
                }
            </button>
        </div>
        <div className={isActive ? 'posts table' : 'posts grid'}>
            {data.map( news => (
                <div className="card" key={news.id}>
                    <img src={news.image} alt="" />
                    <div className="card-body">
                        <h4 className='card-title'>{news.title}</h4>
                        <p className='card-text'>{news.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default NewsFilter