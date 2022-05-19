import React from 'react';
import PCSS from './public/css/pricing.module.css';
import classnames from 'classnames';
import FAQ from '../FAQ/index';
import './public/css/bootstrap-icons.css';
// import logo from './public/img/mylogo.svg';
import faqPic from './public/img/faq-1.png';
import webImg from './public/img/web-thumb.png';
import navBg from './public/img/dark-inner-header-1-cover.jpg';

export default function index() {
  return (
    <div className={PCSS.pricing_page}>
      <div classname={PCSS.html}>
      <header className={PCSS.position_relative}>
      <div className={classnames(PCSS.background, PCSS.position_absolute, PCSS.w_100, PCSS.h_100, PCSS.z_index__1)}>
        <img className={PCSS.cover} src={navBg} alt="" />
        
      </div>
      <div className={classnames(PCSS.container)}>
        <nav className={classnames(PCSS.py_4, PCSS.px_4)}></nav>
        <div className={classnames(PCSS.pricing_title)}>
          <div className={classnames( PCSS.d_flex, PCSS.justify_content_center, PCSS.mt_7)}>
            <div className={classnames(PCSS.title_caption, PCSS.d_flex, PCSS.border, PCSS.w_75, PCSS.justify_content_center, PCSS.h2, PCSS.text_center, PCSS.p_4, PCSS.white_opacity)}>
              Markit IQ is designed to help businesses thrive
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className={classnames(PCSS.light_gray_1)} id="pricing">
      <div className={classnames(PCSS.container, PCSS.py_5, PCSS.py_md_10)}>
        <div className={classnames(PCSS.row, PCSS.justify_content_center)}>
          <div className={classnames(PCSS.text_center, PCSS.col_lg_7)}>
            <h2 className={classnames(PCSS.h2, PCSS.text_color)}>
              Pricing & Plans
            </h2>
            <p className={classnames(PCSS.p, PCSS.paragrap, PCSS.second_text_color)}  style={{ marginTop: 10 }}>
              Choose the plan to grow your business. We've got the right pricing to fit your needs.
            </p>
          </div>
        </div>
        <div className={classnames(PCSS.row, PCSS.align_items_end, PCSS.mt_5, PCSS.mt_md_7)}  style={{ marginTop: 80 }}>
          <div className={classnames(PCSS.col_lg_4, PCSS.mb_4, PCSS.mb_lg_0, PCSS.px_0)}>
            <div className={classnames(PCSS.card_item, PCSS.rounded, PCSS.light_background_color)}  style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 40, paddingRight: 40 }}>
              <h3 className={classnames(PCSS.h3, PCSS.text_color, PCSS.text_center)}>
                BASIC
              </h3>
              <h5 className={classnames(PCSS.h5, PCSS.second_text_color, PCSS.text_center)}  style={{ marginTop: 35 }}>
                Organize across all apps by hand
              </h5>
              <div className={classnames(PCSS.price, PCSS.d_flex, PCSS.justify_content_center, PCSS.text_left)}  style={{ marginTop: 35 }}>
                <h2 className={classnames(PCSS.h2, PCSS.primary_text_color)}>
                  49.99
                </h2>
                <div  style={{ marginLeft: 10 }}>
                  <h5 className={classnames(PCSS.h5, PCSS.primary_text_color)}>
                    $
                  </h5>
                  <h6 className={classnames(PCSS.h6, PCSS.disabled_element_text_color)}>
                    Per Month
                  </h6>
                </div>
              </div>
              <div className={PCSS.features_list}  style={{ marginTop: 35 }}>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.secondary_color_1)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    Unlimited product updates
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.secondary_color_1)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    Unlimited product updates
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.secondary_color_1)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    Unlimited product updates
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.muted_color)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    1GB Cloud storage
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.muted_color)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    Email and community support
                  </h6>
                </div>
              </div><button className={classnames(PCSS.btn, PCSS.button, PCSS.primary_color, PCSS.w_100)}  style={{ marginTop: 35 }}><span>TRY NOW</span></button>
            </div>
          </div>

          <div className={classnames(PCSS.col_lg_4, PCSS.mb_4, PCSS.mb_lg_0, PCSS.px_0)}>
            <div className={classnames(PCSS.card_item, PCSS.rounded, PCSS.dark_background_color, PCSS.py_md_9, PCSS.px_md_5)}  style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 40, paddingRight: 40 }}>
              <h3 className={classnames(PCSS.h3, PCSS.light_text_color, PCSS.text_center)}>
                STANDARD
              </h3>
              <h5 className={classnames(PCSS.h5, PCSS.light_text_color, PCSS.text_center)}  style={{ marginTop: 35 }}>
                Organize across all apps by hand
              </h5>
              <div className={classnames(PCSS.price, PCSS.d_flex, PCSS.justify_content_center, PCSS.text_left)}  style={{ marginTop: 35 }}>
                <h2 className={classnames(PCSS.h2, PCSS.primary_text_color)}>
                  124.99
                </h2>
                <div  style={{ marginLeft: 10 }}>
                  <h5 className={classnames(PCSS.h5, PCSS.primary_text_color)}>
                    $
                  </h5>
                  <h6 className={classnames(PCSS.h6, PCSS.disabled_element_text_color)}>
                    Per Month
                  </h6>
                </div>
              </div>
              <div className={classnames(PCSS.features_list)}  style={{ marginTop: 35 }}>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.secondary_color_1)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.light_text_color)}  style={{ marginLeft: 10 }}>
                    Unlimited product updates
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.secondary_color_1)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.light_text_color)}  style={{ marginLeft: 10 }}>
                    Unlimited product updates
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.secondary_color_1)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.light_text_color)}  style={{ marginLeft: 10 }}>
                    Unlimited product updates
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.muted_color)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.light_text_color)}  style={{ marginLeft: 10 }}>
                    1GB Cloud storage
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.muted_color)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.light_text_color)}  style={{ marginLeft: 10 }}>
                    Email and community support
                  </h6>
                </div>
              </div><button className={classnames(PCSS.btn, PCSS.button, PCSS.primary_color, PCSS.w_100)}  style={{ marginTop: 35 }}><span>TRY NOW</span></button>
            </div>
          </div>

          <div className={classnames(PCSS.col_lg_4, PCSS.px_0)}>
            <div className={classnames(PCSS.card_item, PCSS.rounded, PCSS.light_background_color)}  style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 40, paddingRight: 40 }}>
              <h3 className={classnames(PCSS.h3, PCSS.text_color, PCSS.text_center)}>
                PREMIUM
              </h3>
              <h5 className={classnames(PCSS.h5, PCSS.second_text_color, PCSS.text_center)}  style={{ marginTop: 35 }}>
                Organize across all apps by hand
              </h5>
              <div className={classnames(PCSS.price, PCSS.d_flex, PCSS.justify_content_center, PCSS.text_left)}  style={{ marginTop: 35 }}>
                <h2 className={classnames(PCSS.h2, PCSS.primary_text_color)}>
                  224.99
                </h2>
                <div  style={{ marginLeft: 10 }}>
                  <h5 className={classnames(PCSS.h5, PCSS.primary_text_color)}>
                    $
                  </h5>
                  <h6 className={classnames(PCSS.h6, PCSS.disabled_element_text_color)}>
                    Per Month
                  </h6>
                </div>
              </div>
              <div className={PCSS.features_list}  style={{ marginTop: 35 }}>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.secondary_color_1)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    Unlimited product updates
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.secondary_color_1)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    Unlimited product updates
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.secondary_color_1)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    Unlimited product updates
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.muted_color)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    1GB Cloud storage
                  </h6>
                </div>
                <div className={classnames(PCSS.feature_item, PCSS.d_flex, PCSS.align_items_center)}  style={{ marginTop: 15 }}>
                  <div className={classnames(PCSS.icn_circle, PCSS.circle_xs, PCSS.muted_color)}>
                    <i className={classnames(PCSS.bi, PCSS.bi_check2, PCSS.icn_xs, PCSS.light_text_color)}></i>
                  </div>
                  <h6 className={classnames(PCSS.h6, PCSS.text_color)}  style={{ marginLeft: 10 }}>
                    Email and community support
                  </h6>
                </div>
              </div><button className={classnames(PCSS.btn, PCSS.button, PCSS.primary_color, PCSS.w_100)}  style={{ marginTop: 35 }}><span>TRY NOW</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>

		<div className={classnames(PCSS.light_background_color)}>
      <div className={classnames(PCSS.container, PCSS.py_7, PCSS.py_lg_10, PCSS.position_relative)}>
        <div className={classnames(PCSS.row, PCSS.align_items_center, PCSS.justify_content_between, PCSS.reverse_experience)}>
          <div className={classnames(PCSS.row, PCSS.col_lg_5, PCSS.experience_img)}>
            <img className={PCSS.img} src={webImg} alt="" />
          </div>
          <div className={classnames(PCSS.col_lg_6, PCSS.my_5, PCSS.my_lg_0)}>
            <svg width="94" height="7" viewbox="0 0 94 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 0 L 94 0 L 94 7 L 0 7 L 0 0 Z" fill="rgb(52, 192, 66)"></path></svg>
            <h2 className={classnames(PCSS.h2, PCSS.text_color)} style={{ marginTop: 35 }}>
              Try the full Markit IQ Experience
            </h2>
						<div className={classnames(PCSS.d_flex, PCSS.space_between, PCSS.btns_center)}>
              
                <div className={PCSS.align_items_center} style={{ marginTop: 35, marginRight: 20 }}>
                  <button className={classnames(PCSS.btn, PCSS.button, PCSS.price_button)} href="#pricing"><span className={PCSS.btn_text}>GET STARTED</span></button>
                </div>
              
							<div className={PCSS.align_items_center} style={{ marginTop: 35 }}>
								<button className={classnames(PCSS.btn,  PCSS.price_button_light)}><span className={PCSS.btn_text}>REQUEST DEMO</span></button>
							</div>
						</div>
          </div>
        </div>
      </div>
    </div>
			
			<section className={classnames(PCSS.d_flex, PCSS.faded_light_blue)}>
				<p></p>
				<div className={classnames(PCSS.container, PCSS.py_7, PCSS.py_lg_10)}>
					<div className={classnames(PCSS.row, PCSS.align_items_center, PCSS.justify_content_around)}>
						<div className={classnames(PCSS.col_lg_4, PCSS.my_5, PCSS.my_lg_0)}>
							<h2 className={classnames(PCSS.h2, PCSS.text_color)} style={{ marginTop: 0 }}>
								Frequently Asked Questions
							</h2>
							<p className={classnames(PCSS.p, PCSS.paragraph, PCSS.second_text_color)} style={{ marginTop: 10}}>
								If your question is not listed here, feel free to contact us.
							</p>
							<div className={classnames(PCSS.d_flex, PCSS.align_items_center)} style={{ marginTop: 35 }}>
								<button className={classnames(PCSS.btn, PCSS.button, PCSS.price_button)}><span className={PCSS.btn_text}>Ask your question</span></button>
							</div>
							
							<img className={classnames(PCSS.img, PCSS.d_flex, PCSS.flex_start, PCSS.faq_img)} src={faqPic} alt="" />
						</div>

						<div className={classnames(PCSS.col_lg_6, PCSS.col_md_10, PCSS.mb-5, PCSS.mb_lg_0)}>
							<FAQ />
						</div>
					</div>
				</div>
			</section>
			
			<section className={PCSS.light_background_color}>
				<div className={classnames(PCSS.container, PCSS.py_9)}>
					<div className={classnames(PCSS.row, PCSS.align_items_stretch, PCSS.justify_content_center, PCSS.mt_5)}>
            <div className={classnames(PCSS.d_flex, PCSS.justify_content_between, PCSS.col_lg_10, PCSS.reverse_cta)}>
              <h2 className={PCSS.ready} id="">Ready to dive in? <br /> 
                <span className={PCSS.text_aqua}>Start your free trial today.</span>
              </h2>
             
              <div className={classnames(PCSS.d_flex, PCSS.btns_center_cta)}>
                <div className={classnames(PCSS.align_items_center)} style={{ marginTop: 35, marginRight: 20 }}>
                  
                    <button className={classnames(PCSS.btn, PCSS.button, PCSS.price_cta_button)} href="#pricing"><span className={classnames(PCSS.btn_text)}>GET STARTED</span></button>
                
                </div>
                <div className={classnames(PCSS.align_items_center)} style={{ marginTop: 35 }}>
                  <button className={classnames(PCSS.btn, PCSS.button, PCSS.price_cta_button_light)}><span className={PCSS.btn_text}>LEARN MORE</span></button>
                </div>
						  </div>
            </div>
					</div>
				</div>
			</section>
      </div>
      
    </div>
  )
}