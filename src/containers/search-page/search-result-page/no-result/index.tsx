import React, { FC } from 'react';
import './index.less';
import NullPic from './image/none.png';
import MyWhiteBlank from "../../../../components/my-white-blank";

type Props = {};
const NoResult: FC<Props> = (props: Props) => {
  return (
    <div className={ 'no-result' }>
      <img className='no-img' src={ NullPic } alt=""/>
      <p className="des">
        抱歉，没有搜索到您要找的内容~
      </p>
      <MyWhiteBlank backgroundColor={ '#F8F9FA' }/>

      <div className="title">猜你喜欢</div>
      {/*<GuessYouLikeList guessYouLikeList={ [1, 2, 3, 4] }/>*/}
    </div>
  );
};

export default NoResult;
