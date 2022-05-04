import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PostItem from '../component/PostItem'
import CheckBox from '../component/CheckBox'
import '../styles/Home.css'
import Navbar from '../component/Navbar'
import MultiSelect from "../component/MultiSelect";


// import '../styles/Home.css'

function Home() {


  // const [Item, setItem] = useState();

  //   const toggleNavbar = ()=> {
  //       setItem();
  //   }

  return (
    <div>
      <section className='section-2'>
        <div className='container'>
          <div className='product-grid-2'>
            <div className='product-grid-2__main'>
              <section className='section-1'>
                <h1 className='section-1__title-2'>Nha thong minh</h1>
                <div>
                  <div className='wrapper'>
                    <PostItem />

                  </div>
                </div>

              </section>
            </div>

            <div className='product-grid-2__aside'>
              <section className='aside'>
                <h2 className='aside__title'>DANH MUC SAN PHAM</h2>
                <div className='aside__group'>
                  <MultiSelect  />
                  {/* <h1>Dropdown Checkboxes</h1>

                  <div class="dropdown" data-control="checkbox-dropdown">
                    <label class="dropdown-label">Select</label>

                    <div class="dropdown-list">
                      <a href="#" data-toggle="check-all" class="dropdown-option">
                        Check All
                      </a>

                      <label class="dropdown-option">
                        <input type="checkbox" name="dropdown-group" value="Selection 1" />
                        Selection One
                      </label>

                      <label class="dropdown-option">
                        <input type="checkbox" name="dropdown-group" value="Selection 2" />
                        Selection Two
                      </label>

                      <label class="dropdown-option">
                        <input type="checkbox" name="dropdown-group" value="Selection 3" />
                        Selection Three
                      </label>

                      <label class="dropdown-option">
                        <input type="checkbox" name="dropdown-group" value="Selection 4" />
                        Selection Four
                      </label>

                      <label class="dropdown-option">
                        <input type="checkbox" name="dropdown-group" value="Selection 5" />
                        Selection Five
                      </label>
                    </div>
                  </div> */}

                </div>








              </section>

            </div>
          </div>

        </div >
      </section >
    </div >


  )
}

export default Home

// {/* <div className='aside__label '> DANH MUC</div>
//                   <div className='aside__body-2' >
//                     <div className='vstack gap-2'>
//                       {/* <label className='checkbox-styled'>
//                         <input className='.checkbox-styled__input' type='checkbox' name='checkbox' />
//                         <span className='checkbox-styled__icon'></span> alo
//                       </label> */}



//                     </div>
//                   </div> */}