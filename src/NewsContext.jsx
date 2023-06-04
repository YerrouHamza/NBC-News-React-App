import axios from 'axios';
import { useState, useEffect, createContext} from 'react'

export const NewsContext =  createContext();

export const NewsProvider = props => {

    const [mainData, setMainData] = useState([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const [country, setCountry] = useState('us');
    const [category, setCategory] = useState('');

    const [globalSettings, setGlobalSettings] = useState(false)


    const ApiKey = 'afe532d07ba148329362cacae6343b5e';

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}${category ? `&category=${category}` : ''}&apiKey=${ApiKey}`)
        .then(Response => {
            const articles = Response.data.articles
            console.log(articles)
            setMainData(articles)
            setLoaded(Response.data ? true : false)
        }).catch(error => {
            console.log(error)
        })
    }, [country]);

    // console.log('news Data: ' + mainData)
    // console.log('news Data: ' + `https://newsapi.org/v2/top-headlines?country=${country}${category ? `&category=${category}` : ''}&apiKey=${ApiKey}`)

    // // get date and change it to the last 3 days ago date
    // const date = new Date()
    // date.setDate(date.getDate() - 3);
    // const oldDate = date.toLocaleDateString().toLocaleString()
    
    // // the localstorage
    // const getNewsDataFromLS = JSON.parse(localStorage.getItem('newsData'))
    
    // useEffect(() => {
    //     if(localStorage.getItem('newsData')) {
    //         setData(getNewsDataFromLS); // set the data on the main news state
    //         // console.log(1)
    //     } else {
    //         // get news data from news from API 
    //         axios.get(`https://api.worldnewsapi.com/search-news?api-key=${ApiKey}&earliest-publish-date=${oldDate}&number=10`)
    //         .then(Response => {
    //             localStorage.setItem("newsData", JSON.stringify(Response.data.news));
    //             setData(Response.data.news); // set data from localstorage
    //         }).catch(error => {
    //             console.log(error)
    //         })
    //         // console.log(2)
    //     }
    // }, []);

    return (
        <NewsContext.Provider value={{mainData, setMainData, setCountry, setCategory, error, loaded, globalSettings, setGlobalSettings}}>
            {props.children}
        </NewsContext.Provider>
    ) 
}