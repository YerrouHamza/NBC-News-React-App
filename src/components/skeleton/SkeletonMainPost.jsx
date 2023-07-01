import './skeleton.scss';

function SkeletonMainPost({tag}) {
  return (
    <div className="skeleton skeleton-main post">
      <div className='post-img image' alt="the Trending image"></div>
      <div className="post-content">
      <h4 className='tag'>{tag}</h4>
        <div className='title'></div>
        <div className='text'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='info'></div>
      </div>
    </div>
  )
}

export default SkeletonMainPost