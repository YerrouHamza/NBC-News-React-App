import React from 'react'

function News() {
    const newsCategory = useMatch('/news/:category')

  return (
    <div>News</div>
  )
}

export default News