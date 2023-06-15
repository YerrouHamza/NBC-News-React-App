import './skeleton.scss';

function SkeletonAside() {
  return (
    <div className="skeleton skeleton-aside">
        <div className='image'></div>
        <div className='text'>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default SkeletonAside