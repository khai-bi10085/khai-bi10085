import React from 'react'
import '../styles/Create.css'
import '../component/Slideshow'
import Slideshow from '../component/Slideshow'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Create() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <div>
                <Slideshow />
            </div>

            <div data-aos='fade-up'>
                <Slideshow />
                
            </div>

            <div data-aos='fade-down'>
                <Slideshow />
            </div>
        </div>



    )
}

export default Create

// <div className='page'>
    //     <div className='fullpage-slider fullpage-slider--full has-pagination'>
    //         <div className='fullpage-slider__container swiper-container swiper-container-initialized swiper-container-vertical'>
    //             <div className='swiper-wrapper' style={{transform:'translate3d(0, 0, 0)',transitionDuration: 0}}>
    //                 <div className='swiper-slide fullpage-slider__slide swiper-slide-active' style={{height: 760 }}>
    //                     <div className='fullpage-slider__content bg-danger'>
    //                         <section className='banner-slider has-nav has-pagination'>
    //                             <div className='banner-slider__pagination swiper-pagination-clickable swiper-pagination-bullets'>
    //                                 <span className='swiper-pagination-bullet' tabIndex='0' role='button' aria-label='Go to slide 1'></span>
    //                                 <span className='swiper-pagination-bullet' tabIndex='0' role='button' aria-label='Go to slide 2'></span>
    //                                 <span className='swiper-pagination-bullet' tabIndex='0' role='button' aria-label='Go to slide 3'></span>
    //                                 <span className='swiper-pagination-bullet swiper-pagination-bullet-active' tabIndex='0' role='button' aria-label='Go to slide 4'></span>
    //                             </div>
    //                             <div className='banner-slider__container swiper-container swiper-container-initialized swiper-container-horizontal'>
    //                                 <div className='swiper-wrapper' style={{transform:'translate3d(-6144, 0, 0)',transitionDuration: 0}}>
    //                                     <div className='swiper-slide banner-slider__slide swiper-slide-duplicate swiper-slide-duplicate-active' data-swiper-slide-index='3' style={{width: 1536}}>
    //                                         <div className='banner-slider__frame'>
    //                                             <picture>
    //                                                 <source media='(max-width: 575px)' srcSet='https://rangdong.com.vn/uploads/slider/2021.12.29-slide3-mobile.jpg' />
    //                                                 <img src='https://rangdong.com.vn/uploads/slide/2022.01.06-slide-3.jpg' />
    //                                             </picture>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </section>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>