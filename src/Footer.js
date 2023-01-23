
import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="revealed">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <h3 data-target="#collapse_1">Quick Links</h3>
                  <div className="collapse dont-collapse-sm links" id="collapse_1">
                    <ul>
                      <li><a href="about.html">About us</a></li>
                      <li><a href="help.html">Faq</a></li>
                      <li><a href="help.html">Help</a></li>
                      <li><a href="account.html">My account</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="contacts.html">Contacts</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h3 data-target="#collapse_2">Categories</h3>
                  <div className="collapse dont-collapse-sm links" id="collapse_2">
                    <ul>
                      <li><a href="#">Kurti</a></li>
                      <li><a href="#">Two Pices</a></li>
                      <li><a href="#">Three Piece</a></li>
                      
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h3 data-target="#collapse_3">Contacts</h3>
                  <div className="collapse dont-collapse-sm contacts" id="collapse_3">
                    <ul>
                      <li><i className="ti-home" />Karachi, Pakistan<br /></li>
                      <li><i className="ti-headphone-alt" />+923128423286</li>
                      <li><i className="ti-email" /><a href="#0">iqrashk393@gmail.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h3 data-target="">Keep in touch</h3>
                  <div className="" id="collapse_4">
                    {/* <div id="newsletter">
                      <div className="form-group">
                        <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
                        <button type="submit" id="submit-newsletter"><i className="ti-angle-double-right" /></button>
                      </div>
                    </div> */}
                    <div className="follow_us">
                      <h5>Follow Us</h5>
                      <ul>
                        <li><a href="https://www.instagram.com/sheikhstore.pk12httpsvt.tiktok/"><img src="img/instagram (1).png" data-src="img/twitter_icon.svg" alt="" className="lazy" /></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100077911635059&mibextid=ZbWKwL"><img src="img/facebook.png" data-src="img/facebook_icon.svg" alt="" className="lazy" /></a></li>
                        <li><a href="#0"><img src="img/youtube (1).png" data-src="img/instagram_icon.svg" alt="" className="lazy" /></a></li>
                        <li><a href="https://vt.tiktok.com/ZS8S4t8nH/"><img src="img/tik-tok.png" data-src="img/youtube_icon.svg" alt="" className="lazy" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* /row*/}
              <hr />
              <div className="row add_bottom_25">
                <div className="col-lg-6">
                  <ul className="footer-selector clearfix">
                    <li>
                      <div className="styled-select lang-selector">
                        <select>
                          <option value="English" selected>English</option>
                          <option value="French">French</option>
                          <option value="Spanish">Spanish</option>
                          <option value="Russian">Russian</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="styled-select currency-selector">
                        <select>
                          <option value="US Dollars" selected>Country</option>
                          <option value="Euro">USA</option>
                          <option value="Euro">UAE</option>
                          <option value="Euro">UK</option>
                          <option value="Euro">PAKISTAN</option>
                        </select>
                      </div>
                    </li>
                    <li><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/cards_all.svg" alt="" width={198} height={30} className="lazy" /></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="additional_links">
                    <li><a href="#0">Terms and conditions</a></li>
                    <li><a href="#0">Privacy</a></li>
                    <li><span>© 2023 Sheikh Store</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
    </>
  )
}

export default Footer