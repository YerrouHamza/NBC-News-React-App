import './home.scss'; // import the style

// import the components
import Navbar from '../../components/navbar/Navbar'

import MainPost from '../../Posts/post-main/mainPost'


function home() {
  return <>
    <Navbar />
    <div className="homeContent">
      <MainPost />

    </div>
  </>
}

export default home