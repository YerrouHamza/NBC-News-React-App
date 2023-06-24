import React from 'react'

import './newsPosts.scss'

function NewsPost({index, image, title, description, creator, url }) {
  return (
    <div className="card" key={index}>
        <img src={image} />
        <div className="card-body">
            <div className="card-head">
                <h4 className='card-title'>{title}</h4>
                <p className='card-text'>{description}</p>
            </div>
            <div className="card-footer">
                <p className='card-author'>{creator ? creator : 'Anonymous'}</p>
                <a href={url} target='_blank' className='btn-clear animation-underline'>View More</a>
            </div>
        </div>
    </div>
  )
}

export default NewsPost