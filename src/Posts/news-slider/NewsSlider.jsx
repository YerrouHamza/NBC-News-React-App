import './newsSlider.scss'
import { useState, useEffect, useContext } from "react"

import { NewsContext } from '../../NewsContext';


function NewsSlider() {

    // const [data, setData] = useState();
    const [mainData, setMainData] = useContext(NewsContext);

    const [data, setData] = useState(mainData);
    const [currentSlider, setCurrentSlider] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    useEffect(() => {
        setData(mainData)
    }, [mainData])

    useEffect(() => {
        window.innerWidth > 1000 ? setSlideWidth(80) : setSlideWidth(100);
    
    }, [window.innerWidth]);
    
    useEffect(() => {
        const intreval = setInterval(() => {
            activeIndex === 5 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1)
        }, 5000);
        
        sliderSwitch()
        
        return () => clearInterval(intreval);
    }, [activeIndex]);
    

    const sliderSwitch = () => {
        
        setCurrentSlider(-slideWidth * activeIndex)
        
    }
    
    const HandelSwitch = (event, index) => {
        setActiveIndex(index);
        sliderSwitch();
    }

    const sliderControl = {
        'transform': `translateX(${currentSlider}%)`
    }
    

    return (
        <div className="slider">
            <h2 className='section-title'>Editor’s Picks</h2>
            <div className="slider-container" style={sliderControl}>
                {data.slice(0, 6).map((news, index) => (
                    <a className="card animation-outline" key={index} href="">
                        <div className='card-body'>
                            <div className="card-img">
                                <img src={news.urlToImage}/>
                                <span className='card-img-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="card-content">
                                <h3 className="title">{news.title}</h3>
                                <p className="text">{news.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div className="slider-controls">
                {data.slice(0, 6).map((news, index) => (
                    <span className={activeIndex === index ? 'slider-switch active' : 'slider-switch'} onClick={event => HandelSwitch(event, index)} key={index}></span>
                ))}
            </div>
        </div>
    )
}

export default NewsSlider