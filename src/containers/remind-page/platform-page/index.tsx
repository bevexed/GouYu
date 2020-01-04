import React, { Component } from 'react';
import './index.less';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { RouteComponentProps } from 'react-router';
interface PlatformIndex extends RouteComponentProps {
    val: null,
    tabs: null,
}

class PlatformIndex extends Component<PlatformIndex>{
    render() {
        return (
            <div className="platform-container">
                <div className="platform-container-top">
                    <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="platform-image" />
                    <p className="platform-container-title">平台通知</p>
                </div>
                <div className="platform-container-con">
                    {new Array(10).fill(1).map((item, key) =>
                        <div className="platform-container-center" key={key}>
                            <p className="center-top-title">今天 10:00</p>
                            <div className="platform-container-info">
                                <h3>健康任务提醒</h3>
                                <div className="info-top">
                                    <MyImage className="platform-container-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577774306343&di=9513ed808d895914506fd67f1070774f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170512%2Fceb4c51b34c54032a65e1fb23af7eeaa_th.jpg'} />
                                    <div className="info-right">
                                        <p className="info-right-test">您今天还未健康打卡哦！不要忘记啦连续打卡有惊喜~快去打卡吧~ </p>
                                        <div className="info-right-jump">
                                            <span>点击去打卡</span>
                                            <MyImage className="info-image" src={iconPic.right} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        )
    }
}
export default PlatformIndex