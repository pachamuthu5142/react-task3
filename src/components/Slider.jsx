import React from 'react'
import { Carousel } from 'react-bootstrap'
import sliderImg1 from '../Home/banner.1.jpg'
import sliderImg2 from '../Home/pic1.jpeg'
import sliderImg3 from '../Home/pic2.jpeg'
import sliderImg4 from '../Home/pic3.jpeg'
import sliderImg5 from '../Home/pic4.jpeg'

function Slider() {
  return (
    <div className='container mt-1'>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className='d-block w-100 'style={{height:550}} src={sliderImg1} alt='first slide'/>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className='d-block w-100 'style={{height:550}} src={sliderImg2} alt='first slide'/>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className='d-block w-100 'style={{height:550}} src={sliderImg3} alt='first slide'/>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className='d-block w-100 'style={{height:550}} src={sliderImg4} alt='first slide'/>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className='d-block w-100 'style={{height:550}} src={sliderImg5} alt='first slide'/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider