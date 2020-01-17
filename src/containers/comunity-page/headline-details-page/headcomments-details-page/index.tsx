import React, { Component } from 'react';
import './index.less';
import { MyImage } from '../../../../components/my-image';
import { iconPic } from '../../../../config/image';
import { RouteComponentProps } from 'react-router';
import { AjaxGetHeadlinesCommentDetailsPageList } from '../../../../api/community-classify-page'
interface CommentsIndex extends RouteComponentProps {
    val: null,
    tabs: null,
}
class CommentsIndex extends Component<CommentsIndex>{

    state = {
        detailsflage: 0,
        CommentDetailsData: [
            {
                communityDynamicId: '',
                content: '',
                createTime: '',
                headImage: '',
                id: '',
                isZan: '',
                nickName: '',
                userId: '',
                zanNumber: ''
            }
        ]
    }
    componentDidMount() {
        this.onHeadCommentDetailsList()
    }

    onHeadCommentDetailsList = async () => {
        const Data = this.props.location.search.slice(1).split('&')
        const sid = Data[0].split('=')[1]
        const userid = Data[1].split('=')[1]
        const res = await AjaxGetHeadlinesCommentDetailsPageList({ id: sid, userId: userid });
        //console.log('Head6666', res.data);
        this.setState({
            CommentDetailsData: res.data.records
        })
    }


    render() {
        const { detailsflage, CommentDetailsData } = this.state
        return (
            <div className="comments-details-container">
                <div className="comments-details-container-con">
                    <div className="comments-details-top">
                        <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="question-image" />
                        <h1>评论详情</h1>
                    </div>
                    <div className="comments-details-center">
                        {
                            CommentDetailsData && CommentDetailsData.map((item, key) =>
                                <div className={[
                                    'comments-center-top',
                                    detailsflage === key && 'active',
                                ].join(' ')} key={item.id} onClick={() => this.setState({ detailsflage: key })}>
                                    <MyImage src={item.headImage} className="center-top-left-image" />
                                    <div className="comments-center-right">
                                        <div className="comments-center-top-left">
                                            <h3>{item.nickName}</h3>
                                            <p className="top-left-distance">
                                                <span>{item.createTime}</span>
                                                {/* <span className="minutes">33分钟前</span> */}
                                            </p>
                                            <p className="top-left-text">
                                                {item.content}
                                            </p>
                                        </div>
                                        <div className="tabs-Release-con-right">
                                            <MyImage src={iconPic.rod} className="Release-con-right-image" />
                                            <span>{item.zanNumber}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                    <div className="comments-details-footer">
                        <input placeholder="回复评论" className="reply-comment" />
                    </div>
                </div>
            </div>
        )
    }

}

export default CommentsIndex