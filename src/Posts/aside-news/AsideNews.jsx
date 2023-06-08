import { useState, useContext } from 'react';

import { NewsContext } from '../../NewsContext';

import './asideNews.scss'


function AsideNews() {

    const {mainData} = useContext(NewsContext); // get the context country

    return <>
        {mainData.slice(1, 2).map((news, index) => (
            <div key={index}>
                <h4 className='aside-news-tag'>Top headline</h4>
                <img className='aside-news-image' src={news.urlToImage} alt="" />
                <h2 className='aside-news-title'>{news.title}</h2>
            </div>
        ))}
    </>
}

export default AsideNews