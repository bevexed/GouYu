import React, { FC, useEffect, useState } from 'react';
import { Carousel } from 'antd-mobile';
import './index.less'

type Props = {};
const Banner: FC<Props> = (props: Props) => {
  const [state, setState] = useState([
    'AiyWuByWklrrUDlFignR',
    'TekJlZRVCjLFexlOCuWn',
    'IJOtIlfsYdTyaDTRVrLI',
  ]);

  useEffect(
    () =>
      setState([
        'AiyWuByWklrrUDlFignR',
        'TekJlZRVCjLFexlOCuWn',
        'IJOtIlfsYdTyaDTRVrLI',
      ]),
    [],
  );


  return (
    <Carousel
      autoplay={ false }
      infinite
      cellSpacing={ 10 }
      slideWidth={ 1 }
      dotStyle={ {
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        width: '5px',
        height: '5px',
      } }
      dotActiveStyle={ {
        backgroundColor: '#fff',
        border: '1px solid #fff',
        width: '5px',
        height: '5px',
      } }
      beforeChange={ (from, to) => console.log(`slide from ${ from } to ${ to }`) }
      afterChange={ index => console.log('slide to', index) }>
      { state.map((val, key) => (
        <div className={ 'carousel-item' } key={ key }>
          <a href="http://www.alipay.com">
            <img
              src={ `https://zos.alipayobjects.com/rmsportal/${ val }.png` }
              alt=""
              onLoad={ () => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
              } }
            />
          </a>
        </div>
      )) }
    </Carousel>
  );
};

export default Banner;
