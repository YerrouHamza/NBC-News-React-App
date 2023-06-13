import './skeleton.scss';

function SkeletonPost() {
  return (
    <div className="skeleton skeleton-post card">
        <div className='image'></div>
        <div className="card-body">
            <div className="card-head">
                <div className='title'></div>
                <div className='text'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="card-footer">
                <div className='text'></div>
                <div className='text'></div>
            </div>
        </div>
    </div>
  )
}

export default SkeletonPost