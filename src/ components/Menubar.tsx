import React from 'react';
import Slider from 'react-slick'; // 수정: Slider 컴포넌트의 이름을 소문자에서 대문자로 변경
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Countryside from '../images/countryside.png';
import Amazingpools from '../images/amazingpools.png';
import Nationalparks from '../images/nationalparks.png';

export const Menubar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}> {/* 수정: slider를 Slider로 변경 */}
      <div className='ml-9'>
        <img src={Countryside} className='w-6 h-6' alt='Countryside' />
        <h1 className='text-xs font-semibold'>Countryside</h1>
      </div>
      <div className='ml-9'>
        <img src={Amazingpools} className='w-6 h-6' alt='Amazing Pools' />
        <h1 className='text-xs font-semibold'>Amazing Pools</h1>
      </div>
      <div className='ml-9'>
        <img src={Nationalparks} className='w-6 h-6' alt='National Parks' />
        <h1 className='text-xs font-semibold'>National Parks</h1>
      </div>
      {/* Add other carousel items similarly */}
    </Slider>
  );
};


