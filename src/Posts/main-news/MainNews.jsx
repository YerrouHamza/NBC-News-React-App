import './mainNews.scss'
import postImage from '../../assets/mbc-main-post-test.png'
import { useContext } from 'react'
import {NewsContext} from '../../NewsContext';


import SkeletonMainPost from '../../components/skeleton/SkeletonMainPost';

function MainNews() {

  const {mainData, loaded} = useContext(NewsContext) // get data from context
  
  return <>
  {loaded ? mainData.slice(0, 1).map((news, index) => (
    <div className="post post-style-main" key={index}>
      <img className='post-img' src={news.urlToImage} alt="the Trending image" />
      <div className="post-content">
        <h4 className='tag'>Trending</h4>
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
          By <span>{news.creator ? news.creator : 'Anonymous'}</span>
          </p>
        </div>
      </div>
    </div>

  )) : <SkeletonMainPost />
}
  </>
}

export default MainNews