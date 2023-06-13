import { useContext, useEffect } from 'react'
import './newsBar.scss'

import { NewsContext } from '../../NewsContext';

import SkeletonBar from '../../components/skeleton/SkeletonBar';


function NewsBar() {

  const {mainData, loaded} = useContext(NewsContext) 

  //  console.log(data[0][0].title)
  
  return <>
    { loaded ? mainData.slice(1, 2).map((news, index) => (
      <div className="news-bar" key={index}>
            <a href={news.url} target='_blank' className='btn btn-primary'>
                Breaking News
            </a>
            {news.title}
      </div>
    )) : <SkeletonBar />} 
  </>
}

export default NewsBar