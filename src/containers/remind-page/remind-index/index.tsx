import React, { Component } from 'react';
import './index.less';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { MyTabBar } from '../../../components/my-tab-bar';
import { RouteComponentProps } from 'react-router';
interface RemindIndex extends RouteComponentProps {
    val: null,
    tabs: null,
}
//
class RemindIndex extends Component<RemindIndex>{
    render() {
        return (
            <div className="remind-container">
                <p className="remind-title">提醒</p>
                <div className="remind-top">
                    <div className="remind-top-icon remind-icon-info" onClick={() => this.props.history.push('/remind/platform-page')}>
                        <MyImage src={iconPic.receiving} className="remind-top-iamge" />
                        <span>平台通知</span>
                        <i className="remind-icon-info-i">3</i>
                    </div>
                    <div className="remind-top-icon" onClick={() => this.props.history.push('/remind/logistics-page')}>
                        <MyImage src={iconPic.car} className="remind-top-iamge" />
                        <span>物流通知</span>
                    </div>
                    <div className="remind-top-icon" onClick={() => this.props.history.push('/remind/message-page')}>
                        <MyImage src={iconPic.message} className="remind-top-iamge" />
                        <span>社区消息</span>
                    </div>
                </div>
                <div className="remind-container-center">
                    {
                        new Array(10).fill(1).map((item, key) =>
                            <div className="remind-container-con" key={key}>
                                <MyImage src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} className="center-top-left-image" />
                                <div className="remind-container-con-right">
                                    <div className="remind-container-con-right-txt">
                                        <h4>卓卓酱</h4>
                                        <span className="con-right-test">2019.02.02</span>
                                    </div>
                                    <p className="remind-container-footer">懒人睡前三部曲改善假胯宽，养成运动静安寺看到</p>
                                </div>
                            </div>
                        )}
                </div>
                <MyTabBar />
            </div>
        )
    }
}
export default RemindIndex