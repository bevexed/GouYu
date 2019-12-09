import React, { FC, useEffect, useState } from 'react';
import { Carousel } from 'antd-mobile';
import './index.less';

type Props = {};
const Discounts: FC<Props> = (props: Props) => {
  const [state, setState] = useState([
    'AiyWuByWklrrUDlFignR',
    'TekJlZRVCjLFexlOCuWn',
    'IJOtIlfsYdTyaDTRVrLI',
  ]);

  const [slideIndex, setSlideIndex] = useState(0);

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
      autoplay={ true }
      infinite
      cellSpacing={ 10 }
      slideWidth={ 1 }
      dotStyle={ {
        background: 'rgba(206,215,227,1)',
        width: '18px',
        height: '2px',
      } }
      dotActiveStyle={ {
        backgroundColor: 'rgba(56,85,120,1)',
        width: '18px',
        height: '2px',
      } }
      beforeChange={ (from, to) => console.log(`slide from ${ from } to ${ to }`) }
      afterChange={ index => setSlideIndex(index) }>
      { state.map((val, key) => (
        <div className={ 'discounts-item' } key={ key }>
          <a href="http://www.alipay.com">
            <img
              src={ require('./image/pic_banner@2x.png') }
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

export default Discounts;
