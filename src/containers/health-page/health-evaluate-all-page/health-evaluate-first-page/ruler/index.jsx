import React from 'react';
import SlideRuler from 'slide-ruler';
import './index.less'

class MyRuler extends React.Component {
  componentDidMount() {
    this._renderSlideRuler();
  }

  handleValue = value => {
    console.log(value); //SlideRuler return value
  };

  _renderSlideRuler = () => {
    return new SlideRuler({
      el: this.refs.slideRuler,
      maxValue: 230,
      minValue: 100,
      currentValue: 170,
      handleValue: this.handleValue,
      canvasWidth: 500 / 2,
      canvasHeight: 168 / 2 / 2,
      heightDecimal: 32 / 2,
      heightDigit: 32 / 4,
      colorDecimal: '#262D2C',
      colorDigit: '#747978',
      precision: 1,
      divide: 114 / 4 / 2,
      fontSize: 28 / 2,
      fontColor: '#262D2C',
      fontMarginTop: 12 * 2,
    });
  };

  render() {
    return (
      <div className='my-ruler'>
        <div ref="slideRuler"/>
      </div>
    );
  }
}

export default MyRuler;
