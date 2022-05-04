import React from 'react'
import '../styles/Footers.scss'
import { Row, Col, Divider } from 'antd'
// import Main from './style'

function Footers() {
  return (
    <div>
      <div id='Main' className='footer-wrapper'>
        <Row>


          <Col span={12} style={{ paddingLeft: 100, paddingTop: 20, paddingBottom: 50 }} >
            <span className='widget-title'>Giới thiệu & Chính sách</span>
            <div className='is-divider-small'></div>
            <div className='menu-footer-container'>
              <div id='menu-footer' className='menu'>
                <li id='menu-item-1' className='item'>
                  <a style={{ color: "#f1f1f1" }} href='https://efn.vn/gioi-thieu-ve-chung-toi/'>Gioi thieu ve chung toi</a>
                  <hr></hr>
                </li>

                <li id='menu-item-1' className='item'>
                  <a style={{ color: "#f1f1f1" }} href='https://efn.vn/gioi-thieu-ve-chung-toi/'>Gioi thieu ve chung toi</a>
                  <hr></hr>
                </li>

                <li id='menu-item-1' className='item'>
                  <a style={{ color: "#f1f1f1" }} href='https://efn.vn/gioi-thieu-ve-chung-toi/'>Gioi thieu ve chung toi</a>
                  <hr></hr>
                </li>

                <li id='menu-item-1' className='item'>
                  <a style={{ color: "#f1f1f1" }} href='https://efn.vn/gioi-thieu-ve-chung-toi/'>Gioi thieu ve chung toi</a>
                </li>
              </div>
            </div>

          </Col>

          <Col span={12} style={{ paddingLeft: 50, paddingBottom: 50, paddingTop: 20 }}>
            <span className='widget-title'>Liên hệ</span>
            <div className='is-divider-small'></div>
            <div className='textwidget'>
              <p>
                <span style={{ fontWeight: 500, color: "#f1f1f1" }}>Tư vấn đặt hàng </span>
                <a href='#' >
                  <strong style={{ color: "#f1f1f1" }}>0123456456486</strong>
                </a>
              </p>

              <p>
                <span style={{ fontWeight: 500, color: "#f1f1f1" }}>Lam viec tat ca cac ngay trong tuan </span>

              </p>

              <p style={{ color: "#f1f1f1", fontWeight: 500 }}>
                <span style={{ fontWeight: 500, color: "#f1f1f1" }}>Lien he voi </span>
                <a href='#' style={{ color: "#f1f1f1" }}>
                  <strong >Fanpage </strong>
                </a>
                de duoc tu van nhanh nhat
              </p>
            </div>
          </Col>

          <Col span={12} style={{ paddingLeft: 100 }} >
            <span className='widget-title'>Fanpage</span>
            <div className='is-divider-small'></div>
            <span style={{ width: 340, height: 130 }}>
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=250&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={300} height={100} style={{ border: 'none', overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; 
                            encrypted-media; picture-in-picture; web-share"></iframe>
            </span>
          </Col>

          <Col span={12} style={{ paddingLeft: 50, paddingBottom: 50 }}>
            <p className='p1'>
              CÔNG TY TNHH THƯƠNG MẠI EURO FITNESS NUTRITION VIỆT NAM
            </p>
            <p className='p1'>
              Cấp ngày: 15/09/2014 tại Sở Kế hoạch và Đầu tư Thành phố Hà Nội
            </p>
            <p className='p1'>
              Địa chỉ: Tầng 27, Phòng 2703 Tòa A3 Ecolife Capitol,
              58 Tố Hữu, Phường Mễ Trì, Quận Nam Từ Liêm,
              Thành phố Hà Nội, Việt Nam
            </p>
            <p className='p1'>
              Thông tin liên hệ: cskh@efn.vn – 081.470.7867
            </p>

            <a href="http://online.gov.vn/Home/WebDetails/89767?AspxAutoDetectCookieSupport=1">
              <img loading='lazy' src='https://efn.vn/wp-content/uploads/2021/12/da-thong-bao-voi-bo-cong-thuong.png' style={{ width: 300, height: 113 }} />
            </a>
          </Col>


          <Col className='bot-last' >
            <div style={{ textAlign: 'center' }}>
              <div style={{ borderBottom: '2px solid #f1f1f1' }}>
                <a href='https://efn.vn/gioi-thieu-ve-chung-toi/' className='fade'>Gioi thieu ve chung toi</a>
                &emsp;
                <a href='https://efn.vn/gioi-thieu-ve-chung-toi/' className='fade'>Huong dan mua hang</a>
                &emsp;
                <a href='https://efn.vn/gioi-thieu-ve-chung-toi/' className='fade'>Chinh sach bao mat thong tin</a>
                &emsp;
                <a href='https://efn.vn/gioi-thieu-ve-chung-toi/' className='fade'>Chính sách thanh toán</a>
                &emsp;
                <a href='https://efn.vn/gioi-thieu-ve-chung-toi/' className='fade'> Chính sách vận chuyển</a>
                &emsp;
                <a href='https://efn.vn/gioi-thieu-ve-chung-toi/' className='fade' >Chính sách đổi trả hàng</a>
              </div>
              <div className='footer_logo' style={{ color: '#f1f1f1' }}>
                <a href='https://efn.vn' >
                  <img style={{ width: 32 }} src='https://efn.vn/wp-content/uploads/2021/11/EFN-Supplements-trắng.png' />
                </a>
                Copyright © 2022  EUROFITNESS ®. TẤT CẢ CÁC QUYỀN ĐƯỢC BẢO LƯU
              </div>

            </div>
          </Col>


        </Row>


      </div>
    </div>
  )
}

export default Footers