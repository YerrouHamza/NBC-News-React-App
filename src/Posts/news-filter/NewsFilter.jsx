// import './'
import {useContext} from 'react';

import { NewsContext } from '../../newsContext';

function NewsFilter() {

    const [data, setData] = useContext(NewsContext);


    return <div className='post-filter'>
        <div className="filter">
            <ul>
                <li>Latest Stories</li>
                <li>Think</li>
                <li>Health</li>
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