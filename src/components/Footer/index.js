import React from 'react';
import classnames from 'classnames';
import FCSS from './public/css/footer.module.css';

function Footer() {
  return (
    <div className={FCSS.navy_background_color}>
      <div className={classnames(FCSS.container_fluid, FCSS.py_5, FCSS.py_md_5, FCSS.footer_spacing)}>
        <div className={classnames(FCSS.row, FCSS.rjustify_content_center, FCSS.ralign_items_strech)}>
          <div className={classnames(FCSS.col_lg_3, FCSS.col_md_6, FCSS.mb_lg_0)}>
            <h3 className={classnames(FCSS.h3, FCSS.light_text_color)}>
              Contact Us
            </h3>

            <div style={{ marginTop: 20 }}>
              <p className={classnames(FCSS.paragraph, FCSS.light_text_color, FCSS.mt_4)}>
                (888) 888-8888
              </p>
              <p className={classnames(FCSS.paragraph, FCSS.light_text_color)}>
                example@example.com
              </p>
            </div> 
            <div className={classnames(FCSS.card_content, FCSS.py_2, FCSS.mt_4)}>
              <a className={FCSS.facebook} href="/"><i className={classnames(FCSS.bi, FCSS.bi_facebook, FCSS.icn_sm, FCSS.icon_text_color)}></i></a><a className={FCSS.instagram} href="/"><i className={classnames(FCSS.bi, FCSS.bi_instagram,  FCSS.icn_sm, FCSS.icon_text_color)} style=
              {{ marginLeft: 20 }}></i></a><a className={FCSS.twitter} href="/"><i className={classnames(FCSS.bi, FCSS.bi_twitter, FCSS.icn_sm, FCSS.icon_text_color)} style={{ marginLeft: 20 }}></i></a>
            </div>
          </div>
          <div className={classnames(FCSS.col_lg_3, FCSS.col_md_6, FCSS.mb_lg_0)}>
            <h3 className={classnames(FCSS.h3, FCSS.light_text_color)}>
              Company Info
            </h3>
            <div className={FCSS.links} style={{ marginTop: 20 }}>
              <a className={classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="/">Our Specialties</a><a className={classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="/" >Why Markit IQ</a><a className=
              {classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="knowledge" >What We Offer</a><a className={classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="/" >Partnerships</a>
            </div>
          </div>
          <div className={classnames(FCSS.col_lg_3, FCSS.col_md_6, FCSS.mb_lg_0)}>
            <h3 className={classnames(FCSS.h3, FCSS.light_text_color)}>
              Solutions
            </h3>
            <div className={FCSS.links} style={{ marginTop: 20 }}>
              <a className={classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="advertising-solutions">Programmatic Ads</a>
              <a className={classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="landing-solutions">Landing Pages</a>
              {/* <a className=
              {classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="#" ></a><a className={classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="#" ></a> */}
            </div>
          </div>
          <div className={classnames(FCSS.col_lg_3, FCSS.col_md_6, FCSS.mb_lg_0)}>
            <h3 className={classnames(FCSS.h3, FCSS.light_text_color)}>
              Pricing
            </h3>
            <div className={FCSS.links} style={{ marginTop: 20 }}>
              <a className={classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="pricing">Subscriptions</a><a className={classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="pricing" >FAQ</a>
              {/* <a className=
              {classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="/" ></a><a className={classnames(FCSS.link, FCSS.light_text_color, FCSS.d_block)} href="/" ></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;