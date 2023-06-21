import React from 'react'
import { useParams } from 'react-router-dom';

function News() {
    const { category } = useParams();
    console.log(category)


  return (
    <div>News</div>
  )
}

export default News