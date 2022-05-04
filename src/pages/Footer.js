import React from 'react';
import '../styles/Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className=' =container'>
                <div className='row g-3'>
                    <div className='col-lg-4 order-lg-1 text-center d-flex flex-column align-items-center'>
                        <a className='footer__logo' href='https://rangdong.com.vn/'>
                            <img src='https://rangdong.com.vn/themes/rangdong/images/logo-white.png' />
                        </a>
                        <div className='footer__copyright d-none d-lg-block mt-auto'>
                            <div><p>haha</p></div>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer;