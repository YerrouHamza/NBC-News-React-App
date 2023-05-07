import {useContext, useEffect, useState} from 'react';
import axios from 'axios';

function NewsFilter() {

    // const [data, setData] = useContext(NewsContext);

    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);


    const ApiKey = '9bea390d002b45ef8bc2fe3577e52a39';
    const Search = 'appel'

    // get date and change it to the last 3 days ago date
    const date = new Date()
    date.setDate(date.getDate() - 3);
    const oldDate = date.toLocaleDateString().toLocaleString()

    useEffect(() => {
        //get lsted news from API 
        axios.get(`https://api.worldnewsapi.com/search-news?api-key=${ApiKey}&text=${Search}&earliest-publish-date=${oldDate}&number=4`)
        .then(Response => {
            console.log(Response.data.news)
            setData(Response.data.news)
            setLoaded(Response.data ? true : false)
        }).catch(error => {
            console.log(error)
        })
    }, []);


    return <div className='post-filter'>
        <div className="filter">
            <ul className='filter-items'>
                <li className='item'><a href="#" className='active'>Latest Stories</a></li>
                <li className='item'><a href="#" className=''>Think</a></li>
                <li className='item'><a href="#" className=''>Health</a></li>
            </ul>
            <button className="btn">

            </button>
        </div>
        <div className="posts">
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