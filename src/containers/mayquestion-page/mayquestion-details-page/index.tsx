import React, { Component } from 'react';
import './index.less';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { RouteComponentProps } from 'react-router';
//import { AjaxGetHeadDetailsPageList } from '../../../api/community-classify-page';
//import { Modal,List } from 'antd-mobile';
//List, Button, WhiteSpace, WingBlank, Icon
interface MayquestionDetailsIndex extends RouteComponentProps {
    val: null,
    tabs: null,
    HeadDetailsData: object
}
class MayquestionDetailsIndex extends Component<MayquestionDetailsIndex, any>{
    state = {
        flage: true,
        focusflage: true,
        commentsState: true,
    }
    onFocusf = () => {
        this.setState({
            focusflage: false,
        })
    }
    onComments = () => {
        this.setState({
            commentsState: !this.state.commentsState,
        })
    }
    onchange = () => {
        this.setState({
            flage: false,
        })
    }
    render() {
        const { flage, focusflage } = this.state
        return (
            <div className="mayquest-details-content">
                <div className="dynamic-container-top">
                    <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="dynamic-image" />
                    <p className="dynamic-container-title">问答</p>
                </div>
                <div className="mayquest-details-con">
                    <div className="mayquest-details-center-top">
                        <div className="dynamic-details-top">
                            <MyImage className="center-top-left" src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} />
                            <div className="center-top-right">
                                <div>
                                    <h3>毒岛百合子</h3>
                                </div>
                            </div>

                        </div>
                        <div className="mayquest-details-content-tops">
                            <p className="dynamic-details-content-tops-test">健身教学：连续22天的腹肌训练，很多女生去健身房除了用跑步机，对其他器械动作一头雾水。</p>
                            <p className="dynamic-details-content-bot-text">
                                <span>20回答</span>
                                <MyImage src={iconPic.more} className="content-tops-text-image" />
                            </p>
                        </div>
                    </div>
                    {
                        new Array(10).fill(1).map((item, key) =>
                            <div className="dynamic-details-center" key={key}>
                                <div className="dynamic-details-top">
                                    <MyImage className="center-top-left" src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} />
                                    <div className="center-top-right">
                                        <div>
                                            <h3>毒岛百合子</h3>
                                            <p className="center-top-right-date">2019/10/24 23:00</p>
                                        </div>
                                        {focusflage ? <p className="center-top-right-focus" onClick={this.onFocusf}> 关注 </p> : <p className="center-top-been-focused"> 已关注 </p>}
                                    </div>
                                </div>
                                <p className={`dynamic-details-center-text ${flage === false && 'dynamic-details-con-text'}`}>健身教学：连续22天的腹肌训练，很多女生去健身房除了用跑步机，对其他器械动作一头雾水，也完全没有计划目的性的去健身房，其实女生也应看到马上到马上为了让的急啊时看见的机会呢啊毕竟看见刷卡机上说可拉动奥康没</p>
                                <div className="dynamic-details-accordion">
                                    <p className={`dynamic-details-accordion-rig ${flage || 'dynamic-details-flage'}`} onClick={this.onchange}>全部</p>
                                </div>
                                <div className="dynamic-details-con-img">

                                    <MyImage className="details-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577774306343&di=9513ed808d895914506fd67f1070774f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170512%2Fceb4c51b34c54032a65e1fb23af7eeaa_th.jpg'} />
                                    <MyImage className="details-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577785236487&di=ecae8c37c6ab058ae6e6439371e25d9b&imgtype=0&src=http%3A%2F%2Fpic.eastlady.cn%2Fuploads%2Ftp%2F201703%2F9999%2F3732714ab0.jpg'} />
                                    <MyImage className="details-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577774306343&di=9513ed808d895914506fd67f1070774f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170512%2Fceb4c51b34c54032a65e1fb23af7eeaa_th.jpg'} />
                                </div>
                                <p className="dynamic-cente-footer-tabs">
                                    <div className="dynamic-details-footer-g">
                                        <MyImage src={iconPic.info} className="dynamic-details-footer-icon" />
                                        <span>评论</span>
                                    </div>
                                    <div className="dynamic-details-footer-g footer-right">
                                        <MyImage src={iconPic.rod} className="dynamic-details-footer-icon" />
                                        <span>点赞</span>
                                    </div>
                                </p>

                            </div>)}
                </div>
            </div>
        )
    }
}
export default MayquestionDetailsIndex