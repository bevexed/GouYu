import React, { Component } from 'react';
import './index.less';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { RouteComponentProps } from 'react-router';
interface DetailsIndex extends RouteComponentProps {
    val: null,
    tabs: null,
}
class DetailsIndex extends Component<DetailsIndex>{
    state = {
        flage: true,
        focusflage: true,
        SearchBarState: 0,
        commentsState: true,
       
    }
    onchange = () => {
        this.setState({
            flage: false,

        })
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
    //tabs切换
    SearchTabBar = () => {

        const BarList = [
            {
                label: '评论 58',
            },
            {
                label: '赞1666',
            }
        ];
        const { SearchBarState } = this.state
        return (
            <div className="search-tab-bar">
                {BarList.map((item, index) => (
                    <div
                        onClick={() => {
                            this.setState({ SearchBarState: index })
                        }}
                        key={index}
                        className={[
                            'search-tab-bar-item',
                            SearchBarState === index && 'active',
                        ].join(' ')}>
                        {item.label}
                    </div>
                ))}
            </div>
        )
    }
    //评论
    renderComments = () => {
        const { commentsState } = this.state
        return (
            <div className="dynamic-details-comments">
                <div className={`dynamic-details-comments-content ${commentsState === true ? 'dynamic-details-comments-content' : 'dynamic-details-comments-con'}`}>
                    {
                        new Array(10).fill(1).map((item, key) =>
                            <div className="comments-center-con" key={key}>
                                <MyImage src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} className="center-con-left-image" />
                                <div className="center-top-right">
                                    <h3 className="center-top-right-tit">毒岛百合子</h3>
                                    <p className="top-right-date">
                                        看来大家都是懒人~
                                </p>

                                    <div className="comments-center-footer" onClick={() => this.props.history.push('/comunity/comments-details-page')}>
                                        <p className="comments-center-footer-name">
                                            <span className="footer-name-g">毒岛百合子</span>
                                            <i>等人</i>
                                        </p>
                                        <div className="comments-center-footer-reply">
                                            <span className="footer-name-g">共555条回复</span>
                                            <MyImage className="footer-left-image" src={iconPic.right} />
                                        </div>
                                    </div>
                                    <div className="comments-center-tarbar">
                                        <p className="comments-center-tarbar-date">2019.09.09 12:34</p>
                                        <div className="comments-center-tarbar-right">
                                            <div className="tarbar-right-con tarbar-left" onClick={() => this.props.history.push('/comunity/comments-details-page')}>
                                                <MyImage src={iconPic.info} className="tarbar-right-icon" />
                                                <span>1000</span>
                                            </div>
                                            <div className="tarbar-right-con">
                                                <MyImage src={iconPic.rod} className="tarbar-right-icon" />
                                                <span>345</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                <div className="dynamic-details-unfold" onClick={this.onComments}>
                    <p>{commentsState === true ? '展开' : '收起'}85条评论</p>
                    <MyImage src={iconPic.bottom} className="unfold-icon" />
                </div>
                <div className="empty"></div>
            </div>
        )

    }

    render() {
        const { flage, focusflage } = this.state
        return (
            <div className="dynamic-details">
                <div className="dynamic-details-con">
                    <div className="dynamic-container-top">
                        <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="dynamic-image" />
                        <p className="dynamic-container-title">动态详情</p>
                        <MyImage src={iconPic.round_arrow} onTouchEnd={() => this.props.history.goBack()} className="dynamic-image" />
                    </div>
                    <div className="dynamic-details-center-con">
                        <div className="dynamic-details-center">
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
                            <p className="dynamic-cente-footer-txt">
                                <span>#海外产品</span>
                            </p>

                        </div>

                        {this.SearchTabBar()}
                        {this.renderComments()}
                    </div>
                    <div className="dynamic-details-footer">
                        <div className="dynamic-details-footer-g">
                            <MyImage src={iconPic.info} className="dynamic-details-footer-icon" />
                            <span>评论</span>
                        </div>
                        <div className="dynamic-details-footer-g">
                            <MyImage src={iconPic.rod} className="dynamic-details-footer-icon" />
                            <span>点赞</span>
                        </div>
                        <div className="dynamic-details-footer-g">
                            <MyImage src={iconPic.write} className="dynamic-details-footer-icon" />
                            <span>转发</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default DetailsIndex