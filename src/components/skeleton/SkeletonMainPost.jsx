import './skeleton.scss';

function SkeletonMainPost() {
  return (
    <div className="skeleton skeleton-main post">
      <div className='post-img image' alt="the Trending image"></div>
      <div className="post-content">
        <div className='subtitle'></div>
        <div className='title'></div>
        <div className='text'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="info">
          <div className='text'></div>
          <div className='text'></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonMainPost