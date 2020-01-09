import React, { Component } from 'react';
import './index.less';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { RouteComponentProps } from 'react-router';
interface MessageIndex extends RouteComponentProps {
    val: null,
    tabs: null,
}

class MessageIndex extends Component<MessageIndex>{
    state = {
        BarState: 0
    }

    onchage = (a: number) => {
        console.log('a', a)
        this.setState({
            BarState: a
        })
    }
    renderReply = () => {
        return (
            <div className="message-center">
                {
                    new Array(10).fill(1).map((item, key) =>
                        <div className="message-center-con" key={key}>
                            <MyImage src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} className="center-con-left-image" />
                            <div className="center-top-right">
                                <h3 className="center-top-right-tit">毒岛百合子</h3>
                                <p className="top-right-date">
                                    1小时前
                                </p>
                                <div className="message-center-right-test">
                                    <div className="message-center-right-reply">回复我：</div>
                                    <div className="message-con-reply-right">我看是，主要是队伍太少了，小组赛垫底都不用去败者组的。</div>
                                </div>

                                <div className="message-center-footer">
                                    <p className="message-center-footer-name">
                                        <span className="footer-name-g">毒岛百合子</span>
                                        <i>等人</i>
                                    </p>
                                    <div className="message-center-footer-reply">
                                        <span className="footer-name-g">共555条回复</span>
                                        <MyImage className="footer-left-image" src={iconPic.right} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        )
    }

    giveLike = () => {
        return (
            <div className="message-center">
                {
                    new Array(10).fill(1).map((item, key) =>
                        <div className="message-center-con" key={key}>
                            <MyImage src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} className="center-con-left-image" />
                            <div className="center-top-right">
                                <h3 className="center-top-right-tit">毒岛百合子</h3>
                                <p className="top-right-date">
                                    1小时前
                            </p>
                                <div className="message-con-test">
                                    赞了我
                            </div>

                                <div className="message-center-footer">
                                    <p className="message-center-footer-name">
                                        <span className="footer-name-g">毒岛百合子</span>
                                        <i>等人</i>
                                    </p>
                                    <div className="message-center-footer-reply">
                                        <span className="footer-name-g">共555条回复</span>
                                        <MyImage className="footer-left-image" src={iconPic.right} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
    render() {
        const List = [
            {
                label: '回复',
            },
            {
                label: '点赞',
            }
        ];
        const { BarState } = this.state
        return (

            < div className="message-container">
                <div className="platform-container-top">
                    <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="platform-image" />
                    <p className="platform-container-title">物流通知</p>
                </div>
                <div className="message-containe-bg">
                    <div className="message-container-tabs">
                        {
                            List.map((item, key) =>
                                <div key={key} onClick={() => this.onchage(key)} className={[
                                    'tabs-con',
                                    BarState === key && BarState === 0 ? 'active' : BarState === key && BarState === 1 ? 'rightactive' : ''
                                ].join(' ')}>
                                    {item.label}
                                </div>

                            )
                        }
                    </div>
                </div>
                {BarState === 0 ? this.renderReply() : this.giveLike()}
            </div >
        )
    }
}
export default MessageIndex
