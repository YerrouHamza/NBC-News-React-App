import './skeleton.scss';

function SkeletonBar() {
  return (
    <div className="skeleton skeleton-bar card">
      <div className='button'></div>
      <div className="text">
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default SkeletonBar