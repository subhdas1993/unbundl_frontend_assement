import React from 'react'
import FetchData from './subComponents/main/fetchdata'
import whistleImg1 from '../assets/images/Frame 2609800.svg'
import whistleImg2 from '../assets/images/Group 2609315.png'
import whistleImg3 from '../assets/images/Group 2609309.png'
import whistleImg4 from '../assets/images/Frame 51 2.png'
import clinicImg from '../assets/images/Rectangle 3022.png'

function Main({ headerHeight }) {
  return (
    <div style={{ marginTop: `${headerHeight}px` }}>
      <div className='clinicSection'>
        <div>
          <img src={clinicImg} alt="clinicImg" className='clinicImgLayout' />
        </div>
        <div className='clinicDetailsLayout'>
          <div>
            <div>
              We are Doctor-led, not direct-to-customers
            </div>
            <div>
              We don't offer direct-to-customer invisible aligners. We treat you in a Dental clinic with an Orthodontist. Aligners are just the beginning;  we ensure comprehensive treatment in over 450+ clinics nationwide.
            </div>
            <div>
              <button className='callbackbutton'>Get a Callback</button>
            </div>
          </div>
        </div>
      </div>
      <div className='whistleMainSection'>
        <div className='whistleSection'>
          <div>
            <div>The Whistle Difference</div>
            <div className='whistleListSection'>
              <div className='whistleListSectionFlex'>
                <div>
                  <img src={whistleImg1} alt="WhistleImg1" />
                </div>
                <div>
                  <div className='whistleListSectionFlexListHeading'>Next-Gen</div>
                  <div>Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.</div>
                </div>
              </div>
              <div className='whistleListSectionFlex'>
                <div>
                  <img src={whistleImg2} alt="WhistleImg2" />
                </div>
                <div>
                  <div className='whistleListSectionFlexListHeading'>Hassle-Free</div>
                  <div>Predictable, comfortable & lifestyle-friendly for an easy smile transformation.</div>
                </div>
              </div>
              <div className='whistleListSectionFlex'>
                <div>
                  <img src={whistleImg3} alt="WhistleImg3" />
                </div>
                <div>
                  <div className='whistleListSectionFlexListHeading'>Transparent Pricing</div>
                  <div>Everything's included – from scans to aligners, doctor consults, and retainers – no hidden costs.</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={whistleImg4} alt="WhistleImg4" className='whistleImg4Layout' />
          </div>
        </div>
      </div>
      <div className='showAccordion'>
        <span>Got Question?</span> We've got answers
      </div>
      <FetchData />
    </div>
  )
}

export default Main