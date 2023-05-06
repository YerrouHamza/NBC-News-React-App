import { useState, useEffect, createContext} from 'react'

export const NewsContext =  createContext();

export const NewsProvider = props => {

    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadAsyncStuff = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-05-01&sortBy=publishedAt&apiKey=afe532d07ba148329362cacae6343b5e`);
                const data = await response.json();
                setData(data.articles);

            } catch (error) {
                setError(error);
            } finally {
                setTimeout(() => {
                    setLoaded(true);
                }, 2000);
            }
        };

        loadAsyncStuff();
    }, []);

    return (
        <NewsContext.Provider value={[data, setData, error, setError, loaded, setLoaded]}>
            {props.children}
        </NewsContext.Provider>
    ) 
}