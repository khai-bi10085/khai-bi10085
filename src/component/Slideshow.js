import { useEffect } from "react"
import React from 'react'
import { Carousel } from 'antd';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Slideshow() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <Carousel dotPosition='top' autoplay>
                <div>
                    <picture>
                        <source media='(min-width:575)' srcSet='https://rangdong.com.vn/uploads/slider/2021.12.29-slide3-mobile.jpg' ></source>
                        <img src='https://rangdong.com.vn/uploads/slide/2022.01.06-slide-3.jpg' />
                    </picture>
                </div>
                <div>
                    <picture>
                        <source media='(min-width:575)' srcSet='https://rangdong.com.vn/uploads/images/Slide/sukien2804/background-mobile.jpg' ></source>
                        <img src='https://rangdong.com.vn/uploads/images/Slide/sukien2804/background.jpg' />
                        
                    </picture>
                </div>
                <div>
                    <picture>
                        <source media='(min-width:575)' srcSet='https://rangdong.com.vn/uploads/slider/2021.12.29-slide2-mobile.jpg' ></source>
                        <img src='https://rangdong.com.vn/uploads/slider/2021.12.29-slide2-PC.jpg' />
                    </picture>
                </div>
            </Carousel>
        </div>
    )
}

export default Slideshow