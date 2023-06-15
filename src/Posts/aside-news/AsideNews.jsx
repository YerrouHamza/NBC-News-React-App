import { useContext } from 'react';
import { NewsContext } from '../../NewsContext';

import './asideNews.scss'

import SkeletonAside from '../../components/skeleton/SkeletonAside';


function AsideNews() {

    const {mainData, loaded} = useContext(NewsContext); // get the context country

    return <>
        <h4 className='aside-news-tag'>Top headline</h4>
        { loaded ? mainData.slice(1, 2).map((news, index) => (
            <div key={index}>
                <img className='aside-news-image' src={news.urlToImage} alt="" />
                <h2 className='aside-news-title'>{news.title}</h2>
            </div>
            )) : <SkeletonAside />
        }
    </>
}

export default AsideNews