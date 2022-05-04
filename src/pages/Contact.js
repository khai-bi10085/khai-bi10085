import React from 'react'
import '../styles/Contact.css'
import Map from '../component/Map'
function Contact() {


    return (
        <div>
            <div className='bg-light border-top'>
                <div className='container py-30'>
                    <section className='bg-white mb-4'>
                        <div className='row no-gutters'>
                            <div className='col-lg-6'>
                                <div className='p-3 p-sm-20 p-lg-30'>
                                    <div className='mb-2 fw-700'>CONG TU CO PHAN BONG DEN PHICH NUOC RANG DONG</div>
                                    <div style={{
                                        boxSizing: 'border-box', fontFamily: ("UTMAvo", "Arial", "-apple-system", "Segoe UI", "Roboto", "Noto Sans",
                                            "Liberation Sans", "sans-serif", "Apple Color Emoji",
                                            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "system-ui"), fontSize: 16
                                    }} >
                                        Địa chỉ: Số 87-89, Phố Hạ Đình, Phường Thanh Xuân Trung,
                                    </div>
                                    <div style={{
                                        boxSizing: 'border-box', fontFamily: ("UTMAvo", "Arial", "-apple-system", "Segoe UI", "Roboto", "Noto Sans",
                                            "Liberation Sans", "sans-serif", "Apple Color Emoji",
                                            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "system-ui"), fontSize: 16
                                    }} >
                                        Quan Thanh Xuan ,Ha Noi
                                    </div>
                                    <form className='mt-3' action method='post' name='feedbackForm' id='feedbackForm' >
                                        <div className='input-group mb-2'>
                                            <span className='input-group-text bg-light text-muted'>

                                            </span>
                                            <input className='form-control' type='text' name='name' id='name' placeholder='Ho ten' required />
                                        </div>

                                        <div className='input-group mb-2'>
                                            <span className='input-group-text bg-light text-muted'>

                                            </span>
                                            <input className='form-control' type='text' name='address' id='address' placeholder='Dia chi' />
                                        </div>

                                        <div className='input-group mb-2'>
                                            <span className='input-group-text bg-light text-muted'>

                                            </span>
                                            <input className='form-control' type='text' name='phone' id='phone' placeholder='So dien thoai' required />
                                        </div>

                                        <div className='input-group mb-2'>
                                            <span className='input-group-text bg-light text-muted'>

                                            </span>
                                            <textarea className='form-control' name='content' rows='4' placeholder='Noi dung' />
                                        </div>
                                        <div className='text-center'>
                                            <button className='btn-main' type='submit' name='btnSend' id='button' value='submit'>Gui lien he</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <Map />
                            </div>
                        </div>
                    </section >

                    <div className='row g-3 g-lg-20'>
                        <div className='col-md-6'>
                            <div className='agent'>
                                <h2 className='agent__title'><span>Tru so chinh</span></h2>
                                <div className='row g-2 mb-2'>
                                    <div className='col-auto'>
                                        <div className='col'>Số 87-89 phố Hạ Đình, phường Thanh Xuân Trung, quận Thanh Xuân, Hà Nội</div>
                                    </div>
                                </div>
                                <div className='row g-2 mb-2'>
                                    <div className='col-auto'>
                                        <div className='col'>
                                            <p>
                                                DT:0838211166<br></br>
                                                Fax:65446535654896
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <a className='agent__link' href='https://goo.gl/maps/vf31usQTGk3DZjEq8'>Xem tren Google Map</a>
                                </div>


                            </div>

                        </div>


                        {/* Co so hai */}
                        <div className='col-md-6'>
                            <div className='agent'>
                                <h2 className='agent__title'><span>Co so 2</span></h2>
                                <div className='row g-2 mb-2'>
                                    <div className='col-auto'>
                                        <div className='col'>Km18, Khu công nghiệp Quế Võ, Bắc Ninh</div>
                                    </div>
                                </div>
                                <div className='row g-2 mb-2'>
                                    <div className='col-auto'>
                                        <div className='col'>
                                            <p>
                                                DT:0838211166<br></br>
                                                Fax:65446535654896
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <a className='agent__link' href='https://goo.gl/maps/vf31usQTGk3DZjEq8'>Xem tren Google Map</a>
                                </div>
                            </div>

                        </div>

                        {/* Chi nha Tay Nguyen */}
                        <div className='col-md-6'>
                            <div className='agent'>
                                <h2 className='agent__title'><span>Chi nhanh Tay Nguyen</span></h2>
                                <div className='row g-2 mb-2'>
                                    <div className='col-auto'>
                                        <div className='col'>số 142 Lê Thánh Tông, P.Tân Lợi, TP.Buôn Ma Thuột, Tỉnh Đăk Lắk.</div>
                                    </div>
                                </div>
                                <div className='row g-2 mb-2'>
                                    <div className='col-auto'>
                                        <div className='col'>
                                            <p>
                                                DT:0838211166<br></br>
                                                Fax:65446535654896
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <a className='agent__link' href='https://goo.gl/maps/vf31usQTGk3DZjEq8'>Xem tren Google Map</a>
                                </div>


                            </div>

                        </div>

                        <div className='col-md-6'>
                            <div className='agent'>
                                <h2 className='agent__title'><span>Chi nhanh Bien Hoa</span></h2>
                                <div className='row g-2 mb-2'>
                                    <div className='col-auto'>
                                        <div className='col'>
                                            Số 14 – A18 khu dân cư mở rộng, Phường An Bình, TP Biên Hòa, Tỉnh Đồng Nai</div>
                                    </div>
                                </div>
                                <div className='row g-2 mb-2'>
                                    <div className='col-auto'>
                                        <div className='col'>
                                            <p>
                                                DT:0838211166<br></br>
                                                Fax:65446535654896
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <a className='agent__link' href='https://goo.gl/maps/vf31usQTGk3DZjEq8'>Xem tren Google Map</a>
                                </div>


                            </div>

                        </div>


                    </div>
                </div >
            </div>
            <img className='d-block w-100' src='https://rangdong.com.vn/themes/rangdong/images/banner-contact.jpg' alt />
        </div>




    )
}

export default Contact
