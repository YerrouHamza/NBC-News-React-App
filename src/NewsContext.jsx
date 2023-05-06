import axios from 'axios';
import { useState, useEffect, createContext} from 'react'

export const NewsContext =  createContext();

export const NewsProvider = props => {

    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);


    const ApiKey = '9bea390d002b45ef8bc2fe3577e52a39';
    const Search = 'tesla'

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

    return (
        <NewsContext.Provider value={[data, setData, error, setError, loaded, setLoaded]}>
            {props.children}
        </NewsContext.Provider>
    ) 
}