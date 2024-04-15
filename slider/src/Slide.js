import React, { useRef } from 'react';

const Slide = ({ slide, current, handleSlideClick, handlePreviousClick, handleNextClick }) => {
  const progressRef = useRef(null);

  const handleSlideClickInternal = () => {
    handleSlideClick(slide.index);
  };

  const classNames = 'slide' +
    (current === slide.index ? ' slide--current' :
      current - 1 === slide.index ? ' slide--previous' :
        current + 1 === slide.index ? ' slide--next' :
          current - 2 === slide.index ? ' slide--previous' :
            current + 2 === slide.index ? ' slide--next' :
              current - 3 === slide.index ? ' slide--previous' :
                current + 3 === slide.index ? ' slide--next' :
                  '');

  return (
    <li
      className={classNames}
      onClick={handleSlideClickInternal} >
      <div className="slide-image-wrapper">
        {
          current === slide.index &&
          < button onClick={handlePreviousClick} > l </button>
        }
        <img
          className="slide-image"
          alt={slide.headline}
          src={slide.src}
        />
        {
          current === slide.index &&
          < button onClick={handleNextClick}> r </button>
        }
      </div>

    </li >
  );
};

export default Slide;






























//   <article className="slide__content">
//     {/* <h2 className="slide__headline">{slide.headline}</h2>
//     <button className="slide__action btn">{slide.button}</button> */}
//   </article>