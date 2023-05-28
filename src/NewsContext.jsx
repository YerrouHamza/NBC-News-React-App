import axios from 'axios';
import { useState, useEffect, createContext} from 'react'

export const NewsContext =  createContext();

export const NewsProvider = props => {

    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);


    const ApiKey = '9bea390d002b45ef8bc2fe3577e52a39';
    const Search = 'appel'

    useEffect(() => {
        axios.get(`https://api.worldnewsapi.com/search-news?api-key=${ApiKey}&text=${Search}`)
        .then(Response => {
            console.log(Response.data.news)
            setData(Response.data.news)
            setLoaded(Response.data ? true : false)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    console.log('news Data: ' + data)
    console.log('news Data: ' + loaded)

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
        <NewsContext.Provider value={[data, setData, error, setError, loaded, setLoaded]}>
            {props.children}
        </NewsContext.Provider>
    ) 
}