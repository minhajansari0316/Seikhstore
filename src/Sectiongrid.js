
import React from 'react'

const Sectiongrid = () => {
  return (
    <>
    <ul id="banners_grid" className="clearfix">
              <li>
                <a href="#0" className="img_container">
                
                  <img src="img/girlsslide2.jpg" data-src="img/banner_1.jpg" alt="" className="lazy" />
                  <div className="short_info opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <h3>Kurti Collection</h3>
                    <div><span className="btn_1">Shop Now</span></div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#0" className="img_container">
                  <img src="img/2piece.jpg" data-src="img/banner_2.jpg" alt="" className="lazy" />
                  <div className="short_info opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <h3>2 Piece Suith Collection</h3>
                    <div><span className="btn_1">Shop Now</span></div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#0" className="img_container">
                  <img src="img/3piece.jpg" data-src="img/banner_3.jpg" alt="" className="lazy" />
                  <div className="short_info opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                    <h3>3 Piece Suit Collection</h3>
                    <div><span className="btn_1">Shop Now</span></div>
                  </div>
                </a>
              </li>
            </ul>
    </>
  )
}

export default Sectiongrid