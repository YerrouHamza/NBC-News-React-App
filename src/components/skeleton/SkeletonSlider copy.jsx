import './skeleton.scss';

function SkeletonSlider() {
  return (
    <div className="skeleton skeleton-slider card">
        <div className='card-body'>
            <div className='image'></div>
            <div className="card-content">
                <div className="title"></div>
                <div className="text">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkeletonSlider