import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: 'https://superfanzone.com/modules/angarslider/views/img/images/795cdf25114bf6b13d8cb7406fce9515fcd4d701_65b7f193-99c0-472a-a76a-61e794ec996e.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://superfanzone.com/modules/angarslider/views/img/images/b40047e446eb659effc756e9d855a296bff544d9_Banner%20Novedades-5.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://superfanzone.com/modules/angarslider/views/img/images/b3f635f1bf6d7e4821cdbd7c441465a70ee52cbd_Banner%20Tazas.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function Carouselozaru (args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carouselozaru;