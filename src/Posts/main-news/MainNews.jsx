import './mainNews.scss'
import postImage from '../../assets/mbc-main-post-test.png'
import { useContext, useState } from 'react'
import {NewsContext} from '../../NewsContext';

function MainNews() {

  const {mainData} = useContext(NewsContext) // get data from context
  
  return <>
  {mainData.slice(0, 1).map((news, index) => (
    <div className="post post-style-main" key={index}>
      <img className='post-img' src={news.urlToImage} alt="the Trending image" />
      <div className="post-content">
        <h4 className='tag'>Top headline</h4>
        <h2 className='title'>
          {news.title}
        </h2>
        <p className='description'>
          {news.description}
        </p>
        <div className="info">
          <p className='posted-time'>
            <span>{'2'}</span> hours ago
          </p>
          <p className='posted-by'>
           By <span>{news.author}</span>
          </p>
        </div>
      </div>
    </div>
  ))}
  </>
}

export default MainNews