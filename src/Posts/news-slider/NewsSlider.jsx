import './newsSlider.scss'
import { useState, useEffect } from "react"


function NewsSlider() {

    const [data, setData] = useState();
    const [currentSlider, setCurrentSlider] = useState(0);
    const [targetIndex, setTargetIndex] = useState(0)

    
    // the localstorage
    const getNewsDataFromLS = JSON.parse(localStorage.getItem('newsData'))
    
    useEffect(() => {
        if(localStorage.getItem('newsData')) {
            setData(getNewsDataFromLS);
        } else {
            return null
        }
    }, []);
    
    // useEffect(() => {
    //     setCurrentSlider(-520*targetIndex)
    // }, [targetIndex])
    
    
    
    // const autoSlide = setInterval(() => {
    //     targetIndex === 2 ? setTargetIndex(0) : setTargetIndex(targetIndex + 1)
    // }, 5000);
    
    
    const sliderSwitch = (event, index) => {
        setTargetIndex(index)
        setCurrentSlider(-520*index)
        clearInterval(autoSlide);
    }


    const sliderControl = {
        'transform': `translateX(${currentSlider}px)`
    }
    

    return (
    <div className="slider">
        <div className="slider-container" style={sliderControl}>
            {data.slice(0, 4).map(news => (
                <div className="card" key={news.id}>
                    <img src={news.image} className="card-img"/>
                    <div className="card-content">
                        <h3 className="title">{news.title}</h3>
                        <p className="text">{news.text}</p>
                    </div>
                </div>
            ))}

        </div>
        <div className="slider-controls">
            {data.slice(0, 4 - 1).map((news, index) => (
                <span className={targetIndex === index ? 'slider-switch active' : 'slider-switch'} onClick={event => sliderSwitch(event, index)} key={index}></span>
            ))}
        </div>
    </div>
  )
}

export default NewsSlider