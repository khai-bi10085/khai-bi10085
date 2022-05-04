import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <div>
      <section className='about-banner'>
        <div className='container'>
          <div className='about-banner__item'>

            <div className='about-banner__left'>
              <img className='about-banner__icon' src='https://rangdong.com.vn/themes/rangdong/images/icon-target.png' />
              <div className='about-banner__label'>SU MENH  </div>
            </div>

            <div className='about-banner__right'>
              <p>
                Doanh nghiệp tiên phong cung cấp hệ thống giải pháp đồng bộ dựa trên công nghệ lõi là Chiếu sáng và IoT,
                góp phần kiến tạo ngôi nhà thông minh, thành phố thông minh, nông nghiệp Công nghệ cao và nông nghiệp chính xác,
                thúc đẩy cuộc sống hòa hợp với thiên nhiên - thông minh - hạnh phúc, đồng hành cùng dân tộc xây dựng Việt Nam Phồn vinh - Thịnh vượng
              </p>
            </div>
          </div>

          <div className='about-banner__item'>
            <div className='about-banner__left'>
              <img className='about-banner__icon' src='https://rangdong.com.vn/themes/rangdong/images/icon-eye.png' />
              <div className='about-banner__label'>TAM NHIN </div>
            </div>

            <div className='about-banner__right'>
              <p>
                Đến năm 2025 trở thành doanh nghiệp công nghệ cao dẫn đầu thị trường chiếu sáng tại Việt Nam; tiên phong trong lĩnh vực cung cấp Hệ sinh thái 4.0<br></br>
                Năm 2030 sẽ trở thành doanh nghiệp tầm tỷ đô, đưa thương hiệu Rạng Đông lên tầm khu vực.
              </p>
              <p>
                Con đường phát triển bằng Khoa học công nghệ/ Đổi mới sáng tạo và Sự tử tế.
              </p>
              <p>
                Xây dựng Công ty có môi trường làm việc luôn sáng tạo, văn hóa hơn, chuyên nghiệp hơn và hạnh phúc hơn. (thu nhập BQ đến năm 2025 đạt 2000 USD/người/tháng).
              </p>
            </div>
          </div>

          <div className='about-banner__item'>

            <div className='about-banner__left'>
              <img className='about-banner__icon' src='https://rangdong.com.vn/themes/rangdong/images/icon-save.png' />
              <div className='about-banner__label'>GIA TRI COT LOI  </div>
            </div>

            <div className='about-banner__right'>
              <p>
                Đoàn kết, chủ động, sáng tạo, tốc độ và chuyên nghiệp
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='container'>
          <div className='about__grid'>
            <div className='about__col'>
              <h3 className='about__title'>Nang luc cot loi</h3>
              <p>
                Ban sac van hoa :
                <strong> Rang Dong Anh Hung va co Bac Ho</strong>
                <br></br>
                Cong ty cong nghe cao, thong minh &
                <strong>Make in Vietnam</strong>
                <br></br>
                Nang luc chiu ap luc va vuot qua thu thach bang su tu tin
              </p>
              <h3 className='about__title'>Phuong cham hanh dong</h3>
              <p>
                <strong>Phung su khach hang</strong>
                <br></br>
                Sang tao tri thuc - cong huong gia tri
              </p>
            </div>

            <div className='about__col'>
              <h3 className='about__title'>Bo gens cua nguoi Rang Dong</h3>
              <div className='row g-3 align-items-center mb-2'>
                <div className='col-auto'>
                  <span className='fw-700' style={{ fontSize: 50, lineHeight: 1 }}>6T</span>
                </div>
                <div className='col'>
                  Tan tam- Tan luc - Tu giac - Tu tin - Tu trong
                  <br></br>
                  Trung thuc
                </div>
              </div>

              <p className='fs-20 fw-700 mb-1'> 4 Cung</p>
              <p className='mb-2'>
                "Cung huong nhin - Cung tam long
                <br></br>
                Cung lam - Cung huong"
              </p>
              <h3 className='about__title'>PHAM CHAT MOI</h3>
              <p>Kien tao, thich ung va dot pha</p>
            </div>

          </div>


        </div>
      </section>

      <section className='about-2'>
        <div className='container'>
          <h2 className='about-2__title'>THONG TIN CHUNG</h2>
          <div className='about-2__content'>
            <div className='row'>
              <div className='col-lg-8 mb-3'>
                <p>
                  <strong>Ten Tieng Viet:</strong>
                  <br></br>
                  CONG TY CO PHAN BONG DEN PHICH NUOC RANG DONG
                </p>
                <p>
                  <strong>Ten Tieng Anh:</strong>
                  <br></br>
                  RANG DONG LIGHT SOURCE & VACUUM FLASK JOINT STOCK COMPANY
                </p>
                <p>
                  <strong>Ten giao dich:</strong>
                  RALACO
                </p>
                <p>Đại diện theo pháp luật: Ông Nguyễn Đoàn Thăng - Chức vụ: Tổng Giám đốc</p>
                <p>Năm thành lập: 1961</p>
                <p>Mã số thuế: 0101526991</p>

              </div>

              <div className='col-lg-4 mb-3'>
                <p>
                  <strong>Dia chi:</strong>
                  Số 87 - 89 Phố Hạ Đình, Phường Thanh Xuân Trung, Quận Thanh Xuân, TP Hà Nội
                </p>

                <div className='row g-2 align-items-baseline '>
                  <div className='col-auto'>
                    <i className='fas fa-fw fa-phone'>
                    </i>
                  </div>
                  <div className='col'>(024) 3 858 4310/3 858 4165</div>
                </div>
                
                <div className='row g-2 align-items-baseline'>
                  <div className='col-auto'>
                    <i className='fal fa-fw fa-globe'></i>
                  </div>

                  <div className='col'>www.rangdong.com.vn</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      
    </div>




  )
}

export default About