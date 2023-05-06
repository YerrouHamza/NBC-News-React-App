import {useContext} from 'react'

import { NewsContext } from '../../newsContext'

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
            {
                data.map(data => (
                    data.title
                ))
            }
            <div className="card">
                <img src="" alt="" />
                <h4 className='card-title'></h4>
                <p className='card-text'></p>
                <button className='card-btn'>Read More</button>
            </div>
        </div>
    </div>
}

export default NewsFilter