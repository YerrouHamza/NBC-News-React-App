import React from 'react'

import './newsPosts.scss'

function NewsHorizontalPost({index, image, title, description, creator, url, tag }) {
  return (
    <div className="horizontal-post" key={index}>
       <a className="card-img" href={url}>
          <img src={image}/>
          <span className='card-img-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
              </svg>
          </span>
        </a>
      <div className="card-content">
        <h4 className='tag'>{tag}</h4>
        <h2 className='title'>
          <a href={url}>{title}</a>
        </h2>
        <p className='description'>
          {description}
        </p>
        <p className='posted-by'>
        By <span>{creator ? creator : 'Anonymous'}</span>
        </p>
      </div>
    </div>
  )
}

export default NewsHorizontalPost