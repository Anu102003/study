import React, { useState } from 'react';
import Slide from './Slide';
import SliderControl from './SliderControl';

const Slider = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent((previous < 0) ? 0 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent((next === slides.length) ? slides.length - 1 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const wrapperTransform = {
    'transform': `translateX(-${current * (100 / slides.length)}%)`
  };

  return (
    <div className='slider'>
      <div className='slide-container'>
        <ul className="slider-list" style={wrapperTransform}>
          {slides.map((slide) => (
            <Slide
              key={slide.index}
              slide={slide}
              current={current}
              handleSlideClick={handleSlideClick}
              handlePreviousClick={handlePreviousClick}
              handleNextClick={handleNextClick}
            />
          ))}

        </ul>

        {/* <div className="slider__controls">
        <SliderControl
          type="previous"
          handleClick={handlePreviousClick}
        />

        <SliderControl
          type="next"
          handleClick={handleNextClick}
        />
      </div> */}
      </div>
    </div>
  );
};

export default Slider;
