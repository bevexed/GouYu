import React, { Component, useEffect } from 'react';
import './index.less';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { RouteComponentProps } from 'react-router';
//import { useDispatch, useSelector } from 'react-redux';
//import { ReducersProps } from '../../../redux/store';
//import { ClassifyPageDataProps } from '../../../redux/community-classify-page/reducer';
import { AjaxGetDynamicDetailsPageList, AjaxGetDynamicCommentPageList } from '../../../api/community-classify-page';
//import { Modal,List } from 'antd-mobile';
//List, Button, WhiteSpace, WingBlank, Icon
interface DetailsIndex extends RouteComponentProps {
    val: null,
    tabs: null,
    DynamicDetails: any
    [key: string]: any
}
class DetailsIndex extends Component<DetailsIndex, any>{
    state = {
        flage: true,
        focusflage: true,
        SearchBarState: 0,
        commentsState: true,
        DynamicDetails: {
            cityName: "",
            classifyName: '',
            commentNumber: '',
            communityClassifyId: '',
            content: "",
            createTime: '',
            grade: "",
            id: '',
            images: '',
            isFollow: '',
            isPass: '',
            nickName: "",
            userId: '',
            zanNumber: '',
            video: '',
        },
        commentsData: [{
            content: "42341",
            createTime: 1576226254000,
            headImage: "",
            headlinesId: 2,
            id: 2,
            isZan: 0,
            nextNodes: [],
            nickName: "gj_qAsr",
            userId: 26,
            zanNumber: 0
        }],
        totalData: 0,
    }
    componentDidMount() {
        this.onDetailsList()
        this.getDynamiclist()
    }

    onDetailsList = async () => {
        const idData = this.props.location.search.slice(1).split('=')
        const res = await AjaxGetDynamicDetailsPageList({ id: idData[1] });
        // console.log('detailsres', res);
        this.setState({ DynamicDetails: res.data })
        console.log('dddd', this.state.DynamicDetails)
    }
    getDynamiclist = async () => {
        const userInfo: any = localStorage.getItem('userInfo')
        const idData = this.props.location.search.slice(1).split('=')
        const resData = await AjaxGetDynamicCommentPageList({ communityDynamicId: idData[1], userId: JSON.parse(userInfo).user.id });
        console.log('Dynamiclist', resData.data)
        //console.log('userInfo', JSON.parse(userInfo).user.id)
        this.setState({
            commentsData: resData.data.records,
            totalData: resData.data.total
        })
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
        const { DynamicDetails, totalData } = this.state
        const BarList = [
            {
                label: `评论 ${totalData}`,
            },
            {
                label: `赞 ${DynamicDetails.zanNumber}`,
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
        const { commentsState, DynamicDetails, commentsData, totalData } = this.state
        return (
            <div className="dynamic-details-comments">
                <div className={`dynamic-details-comments-content ${commentsState === true ? 'dynamic-details-comments-content' : 'dynamic-details-comments-con'}`}>
                    {
                        commentsData && commentsData.map((item, key) =>
                            <div className="comments-center-con" key={item.id}>
                                <MyImage src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} className="center-con-left-image" />
                                <div className="center-top-right">
                                    <h3 className="center-top-right-tit">{DynamicDetails.nickName}</h3>
                                    <p className="top-right-date">
                                        {item.content}
                                    </p>

                                    <div className="comments-center-footer" onClick={() => this.props.history.push('/comunity/comments-details-page')}>
                                        <p className="comments-center-footer-name">
                                            <span className="footer-name-g">{item.nickName}</span>
                                            <i>等人</i>
                                        </p>
                                        <div className="comments-center-footer-reply">
                                            <span className="footer-name-g">共 {totalData} 条回复</span>
                                            <MyImage className="footer-left-image" src={iconPic.right} />
                                        </div>
                                    </div>
                                    <div className="comments-center-tarbar">
                                        <p className="comments-center-tarbar-date">{item.createTime}</p>
                                        <div className="comments-center-tarbar-right">
                                            <div className="tarbar-right-con tarbar-left" onClick={() => this.props.history.push(`/comunity/comments-details-page?id=${item.id}&userId=${item.userId}`)}>
                                                <MyImage src={iconPic.info} className="tarbar-right-icon" />
                                                <span>{totalData}</span>
                                            </div>
                                            <div className="tarbar-right-con">
                                                <MyImage src={iconPic.rod} className="tarbar-right-icon" />
                                                <span>{item.zanNumber}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                {totalData > 2 && <div className="dynamic-details-unfold" onClick={this.onComments}>
                    <p>{commentsState === true ? '展开' : '收起'}{totalData}条评论</p>
                    <MyImage src={iconPic.bottom} className="unfold-icon" />
                </div>}
                <div className="empty"></div>
            </div>
        )
    }

    renderPraise = () => {
        return (
            <div className="Praise">
                <div className="Praise-content">
                    <MyImage className="center-top-left" src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} />
                    <div className="Praise-content-right">
                        <p>毒岛百合子</p>
                        <p className="center-top-right-focus"> 关注 </p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { flage, focusflage, DynamicDetails, SearchBarState } = this.state
        //console.log('DynamicData', DynamicDetails)
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
                                        <h3>{DynamicDetails.nickName}</h3>
                                        <p className="center-top-right-date">{DynamicDetails.createTime}</p>
                                    </div>
                                    {focusflage ? <p className="center-top-right-focus" onClick={this.onFocusf}> 关注 </p> : <p className="center-top-been-focused"> 已关注 </p>}
                                </div>
                            </div>
                            <p className={`dynamic-details-center-text ${flage === false && 'dynamic-details-con-text'}`}>{DynamicDetails.content}</p>
                            {/* <div className="dynamic-details-accordion">
                                <p className={`dynamic-details-accordion-rig ${flage || 'dynamic-details-flage'}`} onClick={this.onchange}>全部</p>
                            </div> */}
                            <div className="dynamic-details-con-img">
                                {DynamicDetails.images ? DynamicDetails.images.split(',').map((item) => <MyImage className="details-image" src={item} />) : <MyImage className="details-image" src={`${DynamicDetails.video}?x-oss-process=video/snapshot,t_10000,m_fast,w_800`} />}
                                {/* <MyImage className="detai'ls-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577774306343&di=9513ed808d895914506fd67f1070774f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170512%2Fceb4c51b34c54032a65e1fb23af7eeaa_th.jpg'} />
                                <MyImage className="details-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577785236487&di=ecae8c37c6ab058ae6e6439371e25d9b&imgtype=0&src=http%3A%2F%2Fpic.eastlady.cn%2Fuploads%2Ftp%2F201703%2F9999%2F3732714ab0.jpg'} />
                                <MyImage className="details-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577774306343&di=9513ed808d895914506fd67f1070774f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170512%2Fceb4c51b34c54032a65e1fb23af7eeaa_th.jpg'} /> */}
                            </div>
                            <p className="dynamic-cente-footer-txt">
                                <span>#{DynamicDetails.classifyName}</span>
                            </p>

                        </div>

                        {this.SearchTabBar()}
                        {SearchBarState == 0 ? this.renderComments() : this.renderPraise()}
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
                {/* <Modal
                    popup
                    //visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                    afterClose={() => { alert('afterClose'); }}
                >
                    <List renderHeader={() => <div>委托买入</div>} className="popup-list">
                        121212
                    </List>
                </Modal> */}

            </div>
        )
    }
}
export default DetailsIndex