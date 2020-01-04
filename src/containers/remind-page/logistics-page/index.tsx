import React, { Component } from 'react';
import './index.less';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { RouteComponentProps } from 'react-router';
interface LogisticsIndex extends RouteComponentProps {
    val: null,
    tabs: null,
}

class LogisticsIndex extends Component<LogisticsIndex>{
    render() {
        return (
            <div className="logistics-container">
                <div className="platform-container-top">
                    <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="platform-image" />
                    <p className="platform-container-title">物流通知</p>
                </div>
                <div className="platform-container-con">
                    {new Array(10).fill(1).map((item, key) =>
                        <div className="platform-container-center" key={key}>
                            <p className="center-top-title">今天 10:00</p>
                            <div className="platform-container-info">
                                <h3>您的订单已发货</h3>
                                <div className="info-top">
                                    <MyImage className="platform-container-image" src={'https://img.alicdn.com/imgextra/i1/4207517744/O1CN01PfJsgA274ng2nvOKr_!!0-item_pic.jpg_430x430q90.jpg'} />
                                    <div className="info-right">
                                        <p className="info-right-test">订单2733538263已发货，
                                        <span className="info-right-jump">点击查看详情</span>
                                            <MyImage className="info-image" src={iconPic.right} />
                                        </p>
                                        {/* <div className="info-right-jump">
                                            
                                        </div> */}
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
export default LogisticsIndex