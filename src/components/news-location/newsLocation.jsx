import './newsLocation.scss'

function NewsLocation() {
  return (
    <>
        <h5 className='title'>Location News</h5>
        <div className="form-group">
            <label htmlFor="newsLocalion">Get Location specific News</label>
            <input type="text" id='newsLocalion' name='newsLocalion' className='input-control' placeholder='Enter Your Location'/>
            <button className='btn btn-primary' type="submit">Submit</button>
        </div>
    </>
  )
}

export default NewsLocation;