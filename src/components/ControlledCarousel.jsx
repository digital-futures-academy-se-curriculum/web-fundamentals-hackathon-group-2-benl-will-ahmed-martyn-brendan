import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Image} from 'react-bootstrap';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-text'>
      <Carousel.Item>
        <Image className='image' src='https://m.media-amazon.com/images/M/MV5BNDc5YWVjNDgtMzE2OS00ODM3LWEzMjQtMmRhYTk1MDNlOTk2XkEyXkFqcGdeQXVyMTI2NDExNzMz._V1_.jpg'/>
        <Carousel.Caption>
          <h3>The Iron Claw (2023) </h3>
          <p>Loren ipsum n all that</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <Image className='image' src='https://m.media-amazon.com/images/M/MV5BMTYwNzM1OTUwNV5BMl5BanBnXkFtZTcwODQ4MDQ5Nw@@._V1_.jpg' />
        <Carousel.Caption>
          <h3>Piranhaconda (2012)</h3>
          <p>Loren ipsum n all that</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className='image' src='https://pbs.twimg.com/media/Bs2fLDZIYAA3mQk?format=jpg&name=medium' />
        <Carousel.Caption>
          <h3>No Time To Die (2021)</h3>
          <p>Loren ipsum n all that</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className='image' src='https://media.discordapp.net/attachments/1201832259481772072/1205189331396989098/bagel-man031200xx1320-1317-0-163.png?ex=65d77707&is=65c50207&hm=d31ea5ffd07e4def46a8d96286707ca87319818f510f7f38e53b7fcbbfbd067e&=&format=webp&quality=lossless&width=673&height=671' />
        <Carousel.Caption>
          <h3>Bagel Man - Man of Bagels (2024) </h3>
          <p>Loren ipsum n all that</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image className='image' src='https://i0.wp.com/johnnyalucard.com/wp-content/uploads/2022/02/Troll-2-3.jpg?fit=728%2C409&ssl=1' />
        <Carousel.Caption>
          <h3>Troll 2 (1990) </h3>
          <p>Loren ipsum n all that</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;