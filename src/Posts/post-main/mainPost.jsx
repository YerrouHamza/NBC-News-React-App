import './mainPost.scss'
import postImage from '../../assets/mbc-main-post-test.png'

function MainPost() {
  return <>
    <div className="post post-style-main">
      <img className='post-img' src={postImage} alt="the Trending image" />
      <div className="post-content">
        <h4 className='tag'>Trending</h4>
        <h2 className='title'>
          Cake meme reflects coronavirus absurdity in a world where nothing is what it seems
        </h2>
        <p className='description'>
        Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme : “Is this real or is this cake?”
        </p>
        <div className="info">
          <p className='posted-time'>
            <span>2</span> hours ago
          </p>
          <p className='posted-by'>
           By <span>Lucy Hiddleston</span>
          </p>
        </div>
      </div>
    </div>
  </>
}

export default MainPost