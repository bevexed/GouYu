import React, { FC } from 'react';
import './index.less';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import HealthTaskList from './health-task-list';
import { useHistory } from 'react-router';

type HealthTaskPageProps = {};
const HealthTaskPage: FC<HealthTaskPageProps> = (
  props: HealthTaskPageProps,
) => {
  const { go } = useHistory();
  return (
    <div className="health-task-page">
      <WhiteSpace size={ 'lg' }/>
      <WingBlank>
        <div className="nav">
          <span onTouchEnd={ () => go(-1) }>
            <MyImage src={ iconPic.backBlack } className={ 'nav-ico' }/>
          </span>
          <span style={ { textAlign: 'center' } }>任务列表</span>
          <span/>
        </div>

        <section className="slogan">做康养任务 赢健康豪礼</section>

        <HealthTaskList/>
      </WingBlank>

      <WhiteSpace size={ 'lg' }/>

      <section className="bottom">
        <div className="title">猜你喜欢</div>

        {/*<GuessYouLikeList guessYouLikeList={ [1, 2, 3, 4] }/>*/}
      </section>
    </div>
  );
};

export default HealthTaskPage;
