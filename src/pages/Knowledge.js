import React from 'react'
import '../styles/Knowledge.css'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, DragOutlined } from '@ant-design/icons';
import MenuItem from "antd/lib/menu/MenuItem";
import Footers from '../footer/Footers';

function Knowledge() {
    const menu = (

        <Menu>
            <MenuItem key='0' style={{ color: 'red', fontSize: 20 }}>
                haha
            </MenuItem>
            <MenuItem key='1' style={{ fontSize: 20 }}>
                hehe
            </MenuItem>
            <MenuItem key='2' style={{ fontSize: 20 }}>
                hoho
            </MenuItem>
        </Menu>

    );
    return (
        <div className='page'>
            <Row >
                <Col span={8} style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                    <div>  <Dropdown overlay={menu} trigger={['click']}>
                        <a className=" dropdown-label" style={{ fontSize: 20 }} onClick={(e) => e.preventDefault()}>
                            Click me
                        </a>
                    </Dropdown></div>
                </Col>

                <Col span={16}>
                    <Row>
                        <Col span={8} >
                            <div style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                                <a className='news_frame' href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
                                    <img src='https://rangdong.com.vn/uploads/news/tri-thuc-nganh/cac-dai-luong/CO-THE-SU-DUNG-LED-VOI-CONG-TAC-DIEU-CHINH-DO-SANG.jpg'
                                        alt='Có thể sử dụng led với công tắc điều chỉnh độ sáng?' />
                                </a>
                            </div>


                        </Col>
                        <Col span={16}>
                            <div style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                                <h2 className='news__title' style={{ color: '#333333cf' }}>
                                    <a href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
                                        Có thể sử dụng led với công tắc điều chỉnh độ sáng?
                                    </a>
                                </h2>
                                <div className='news__desc'>
                                    LED còn được gọi là nguồn sáng rắn hay nguồn sáng bán dẫn do vậy ưu điểm của LED là dễ dàng điều khiển.
                                    Tuy nhiên không phải bất cứ loại đèn LED nào cũng có thể điều khiển hay sử dụng công tắc điều chỉnh độ sáng.
                                </div>
                            </div>

                        </Col>

                    </Row>
                    {/* ------------------------------------------------------------------------- */}
                    <Row>
                        <Col span={8} >
                            <div style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                                <a className='news_frame' href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
                                    <img src='https://rangdong.com.vn/uploads/news/tri-thuc-nganh/cac-dai-luong/CACH-TINH-TUOI-THO-TRUNG-BINH-CUA-1-BONG-DEN-LED-BULB.jpg'
                                        alt='Có thể sử dụng led với công tắc điều chỉnh độ sáng?' />
                                </a>
                            </div>


                        </Col>
                        <Col span={16}>
                            <div style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                                <h2 className='news__title' style={{ color: '#333333cf' }}>
                                    <a href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
                                        Cách tính tuổi thọ trung bình của 1 bóng đèn led bulb?
                                    </a>
                                </h2>
                                <div className='news__desc'>
                                    Tuổi thọ của đèn LED tính toán căn cứ vào tiêu chuẩn đánh giá tuổi thọ của đèn. Chẳng hạn đèn LED bulb trụ 18W của Rạng Đông
                                    có tuổi thọ công bố là 15.000 giờ L70 có nghĩa là:
                                    50% lượng đèn thắp sáng đến 15.000 giờ vẫn còn sáng và lượng ánh sáng bị suy giảm còn trên 70%
                                </div>
                            </div>

                        </Col>

                    </Row>
                    {/* ------------------------------------------------------------------------- */}
                    <Row>
                        <Col span={8} >
                            <div style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                                <a className='news_frame' href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
                                    <img src='https://rangdong.com.vn/uploads/news/tri-thuc-nganh/cac-dai-luong/Tuoi-tho-trung-binh-cua-1-bong-den-led-bulb-la-bao-nhieu.jpg'
                                        alt='Có thể sử dụng led với công tắc điều chỉnh độ sáng?' />
                                </a>
                            </div>


                        </Col>
                        <Col span={16}>
                            <div style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                                <h2 className='news__title' style={{ color: '#333333cf' }}>
                                    <a href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
                                        Tuổi thọ trung bình của 1 bóng đèn led bulb là bao nhiêu?
                                    </a>
                                </h2>
                                <div className='news__desc'>
                                    Tuổi thọ của đèn LED phụ thuộc rất nhiều các yếu tố như chip LED, driver, nhiệt độ, kết nối….
                                    Về lý thuyết LED có tuổi thọ LED đến 100.000 giờ nhưng thực tế Driver của LED quyết định đến 45 – 50% tuổi thọ của đèn LED.
                                </div>
                            </div>

                        </Col>

                    </Row>

                </Col>
            </Row>

            



        </div>
    )
}

export default Knowledge
{/* <div className='row gx-4 gy-3'>
<div className='col-md-auto'>
    <a className='news_frame' href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
        <img src='https://rangdong.com.vn/uploads/news/tri-thuc-nganh/cac-dai-luong/CO-THE-SU-DUNG-LED-VOI-CONG-TAC-DIEU-CHINH-DO-SANG.jpg'
            alt='Có thể sử dụng led với công tắc điều chỉnh độ sáng?' />
    </a>
</div>
<div className='col-md'>
    <h2 className='news__title' style={{ color: '#333333cf' }}>
        <a href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
            Có thể sử dụng led với công tắc điều chỉnh độ sáng?
        </a>
    </h2>
    <div className='news__desc'>
        LED còn được gọi là nguồn sáng rắn hay nguồn sáng bán dẫn do vậy ưu điểm của LED là dễ dàng điều khiển.
        Tuy nhiên không phải bất cứ loại đèn LED nào cũng có thể điều khiển hay sử dụng công tắc điều chỉnh độ sáng.
    </div>
</div>
</div> */}


{/* <div className='news'>
<div className='row gx-4 gy-3'>
    <div className='col-md-auto'>
        <a className='news_frame' href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
            <img src='https://rangdong.com.vn/uploads/news/tri-thuc-nganh/cac-dai-luong/CACH-TINH-TUOI-THO-TRUNG-BINH-CUA-1-BONG-DEN-LED-BULB.jpg'
                alt='Có thể sử dụng led với công tắc điều chỉnh độ sáng?' />
        </a>
    </div>
    <div className='col-md'>
        <h2 className='news__title' style={{ color: '#333333cf' }}>
            <a href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
                Cách tính tuổi thọ trung bình của 1 bóng đèn led bulb?
            </a>
        </h2>
        <div className='news__desc'>
            Tuổi thọ của đèn LED tính toán căn cứ vào tiêu chuẩn đánh giá tuổi thọ của đèn. Chẳng hạn đèn LED bulb trụ 18W của Rạng Đông
            có tuổi thọ công bố là 15.000 giờ L70 có nghĩa là:
            50% lượng đèn thắp sáng đến 15.000 giờ vẫn còn sáng và lượng ánh sáng bị suy giảm còn trên 70%
        </div>
    </div>
</div>
</div> */}

{/* <div className='news'>
<div className='row gx-4 gy-3'>
    <div className='col-md-auto'>
        <a className='news_frame' href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
            <img src='https://rangdong.com.vn/uploads/news/tri-thuc-nganh/cac-dai-luong/Tuoi-tho-trung-binh-cua-1-bong-den-led-bulb-la-bao-nhieu.jpg'
                alt='Có thể sử dụng led với công tắc điều chỉnh độ sáng?' />
        </a>
    </div>
    <div className='col-md'>
        <h2 className='news__title' style={{ color: '#333333cf' }}>
            <a href='https://rangdong.com.vn/co-the-su-dung-led-voi-cong-tac-dieu-chinh-do-sang-n783.html'>
                Tuổi thọ trung bình của 1 bóng đèn led bulb là bao nhiêu?
            </a>
        </h2>
        <div className='news__desc'>
        Tuổi thọ của đèn LED phụ thuộc rất nhiều các yếu tố như chip LED, driver, nhiệt độ, kết nối….
        Về lý thuyết LED có tuổi thọ LED đến 100.000 giờ nhưng thực tế Driver của LED quyết định đến 45 – 50% tuổi thọ của đèn LED. 
        </div>
    </div>
</div>
</div> */}