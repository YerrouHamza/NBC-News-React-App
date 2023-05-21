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
        setCurrentSlider(-520*targetIndex)
    }, []);
    
    useEffect(() => {
        const intreval = setInterval(() => {
            targetIndex === 3 ? setTargetIndex(0) : setTargetIndex(targetIndex + 1)
            console.log(targetIndex)
        }, 5000);
        
        sliderSwitch()
        return () => clearInterval(intreval);
    }, [targetIndex]);
    
    const sliderSwitch = () => {
        setCurrentSlider(-520*targetIndex)
    }
    
    const HandelSwitch = (event, index) => {
        setTargetIndex(index);
        sliderSwitch();
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
            {data.slice(0, 4).map((news, index) => (
                <span className={targetIndex === index ? 'slider-switch active' : 'slider-switch'} onClick={event => HandelSwitch(event, index)} key={index}></span>
            ))}
        </div>
    </div>
  )
}

export default NewsSlider