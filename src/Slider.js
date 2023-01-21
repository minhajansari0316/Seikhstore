import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Slider =()=> {
  return (
    <>
     <div id="carousel-home">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide style={{height:'500px'}}> 
            <div className="owl-slide cover">
            {/* className="owl-slide cover" style={{width:'100%'}} */}
            <img src="img/slide2.jpg" className="owl-slide cover" />
                  <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <div className="container">
                      <div className="row justify-content-center justify-content-md-end">
                        <div className="col-lg-6 static">
                          <div className="slide-text text-right white">
                            <h2 className="owl-slide-animated owl-slide-title">Attack Air<br />Max 720 Sage Low</h2>
                            <p className="owl-slide-animated owl-slide-subtitle">
                              Limited items available at this price
                            </p>
                            <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></SwiperSlide>
        <SwiperSlide style={{height:'500px'}}>

        <div className="owl-slide cover">
            {/* className="owl-slide cover" style={{width:'100%'}} */}
            <img src="img/girls.jpg" className="owl-slide cover" />
                  <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <div className="container">
                      <div className="row justify-content-center justify-content-md-end">
                        <div className="col-lg-6 static">
                          <div className="slide-text text-right white">
                            <h2 className="owl-slide-animated owl-slide-title">Attack Air<br />Max 720 Sage Low</h2>
                            <p className="owl-slide-animated owl-slide-subtitle">
                              Limited items available at this price
                            </p>
                            <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


        </SwiperSlide>
      
      </Swiper>
              <div className="owl-carousel owl-theme">
           
                <div className="owl-slide cover" style={{backgroundImage: 'url(img/slides/slide_home_2.jpg)'}}>
                  <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <div className="container">
                      <div className="row justify-content-center justify-content-md-end">
                        <div className="col-lg-6 static">
                          <div className="slide-text text-right white">
                            <h2 className="owl-slide-animated owl-slide-title">Attack Air<br />Max 720 Sage Low</h2>
                            <p className="owl-slide-animated owl-slide-subtitle">
                              Limited items available at this price
                            </p>
                            <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/owl-slide*/}
                <div className="owl-slide cover" style={{backgroundImage: 'url(img/slides/slide_home_1.jpg)'}}>
                  <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <div className="container">
                      <div className="row justify-content-center justify-content-md-start">
                        <div className="col-lg-6 static">
                          <div className="slide-text white">
                            <h2 className="owl-slide-animated owl-slide-title">Attack Air<br />VaporMax Flyknit 3</h2>
                            <p className="owl-slide-animated owl-slide-subtitle">
                              Limited items available at this price
                            </p>
                            <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/owl-slide*/}
                <div className="owl-slide cover" style={{backgroundImage: 'url(img/slides/slide_home_3.jpg)'}}>
                  <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(255, 255, 255, 0.5)">
                    <div className="container">
                      <div className="row justify-content-center justify-content-md-start">
                        <div className="col-lg-12 static">
                          <div className="slide-text text-center black">
                            <h2 className="owl-slide-animated owl-slide-title">Attack Air<br />Monarch IV SE</h2>
                            <p className="owl-slide-animated owl-slide-subtitle">
                              Lightweight cushioning and durable support with a Phylon midsole
                            </p>
                            <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="listing-grid-1-full.html" role="button">Shop Now</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/owl-slide*/}
                </div>
              </div>
              <div id="icon_drag_mobile" />
            </div>
    
    
    
    </>
  )
}

export default Slider