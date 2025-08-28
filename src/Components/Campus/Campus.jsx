import './Campus.css'
import galery_1 from '/assets/gallery-1.png'
import galery_2 from '/assets/gallery-2.png'
import galery_3 from '/assets/gallery-3.png'
import galery_4 from '/assets/gallery-4.png'
import white_arrow from '/assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={galery_1} alt="student image" />
        <img src={galery_2} alt="student image" />
        <img src={galery_3} alt="student image" />
        <img src={galery_4} alt="student image" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
