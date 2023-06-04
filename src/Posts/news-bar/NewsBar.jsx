import { useContext, useEffect } from 'react'
import './newsBar.scss'

import { NewsContext } from '../../NewsContext';


function NewsBar() {

  const {mainData} = useContext(NewsContext) 

  //  console.log(data[0][0].title)
  
  return <>
    {mainData.slice(1, 2).map((news, index) => (
      <div className="news-bar" key={index}>
            <a href={news.url} target='_blank' className='btn btn-primary'>
                Breaking News
            </a>
            {news.title}
      </div>
    ))} 
  </>
}

export default NewsBar