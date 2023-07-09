import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    name: 'John Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error cum quis minus, molestiae fuga quos eveniet numquam modi quisquam sapiente, harum porro repellendus corrupti ad ducimus optio. Mollitia, neque?'
  },
  {
    avatar: avatar2,
    name: 'mary jane',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error cum quis minus, molestiae fuga quos eveniet numquam modi quisquam sapiente, harum porro repellendus corrupti ad ducimus optio. Mollitia, neque?'
  },
  {
    avatar: avatar3,
    name: 'John Smith',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error cum quis minus, molestiae fuga quos eveniet numquam modi quisquam sapiente, harum porro repellendus corrupti ad ducimus optio. Mollitia, neque?'
  },
  {
    avatar: avatar4,
    name: 'Jane Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, error cum quis minus, molestiae fuga quos eveniet numquam modi quisquam sapiente, harum porro repellendus corrupti ad ducimus optio. Mollitia, neque?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonails'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials