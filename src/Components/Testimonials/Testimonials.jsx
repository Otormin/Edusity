import './Testimonials.css'
import next_icon from '/assets/next-icon.png'
import back_icon from '/assets/back-icon.png'
import user_1 from '/assets/user-1.png'
import user_2 from '/assets/user-2.png'
import user_3 from '/assets/user-3.png'
import user_4 from '/assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {
    const slider = useRef()
    let tx = 0

    const slideForward = () => {
        tx>-50?tx-=25:tx
        slider.current.style.transform = `translatex(${tx}%)`
    }
    const slideBackward = () => {
        tx<0?tx+=25:tx
        slider.current.style.transform = `translatex(${tx}%)`
    }

  return (
    <div className='testimonails'>
      <img src={next_icon} alt="next icon" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="back icon" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_1} alt="user picture" />
                        <div>
                            <h3>Selina Cline</h3>
                            <span>Edusity, Nigeria</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of 
                     the best decisions I've ever made. The supportive 
                     community, state-of-the-art facilities, and commitment
                     to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_2} alt="user picture" />
                        <div>
                            <h3>Clark Kennedy</h3>
                            <span>Edusity, Nigeria</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of 
                     the best decisions I've ever made. The supportive 
                     community, state-of-the-art facilities, and commitment
                     to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_3} alt="user picture" />
                        <div>
                            <h3>Diana Princess</h3>
                            <span>Edusity, Nigeria</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of 
                     the best decisions I've ever made. The supportive 
                     community, state-of-the-art facilities, and commitment
                     to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user_4} alt="user picture" />
                        <div>
                            <h3>Bruce Whanyoma</h3>
                            <span>Edusity, Nigeria</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of 
                     the best decisions I've ever made. The supportive 
                     community, state-of-the-art facilities, and commitment
                     to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials