import React, { Component } from 'react';
import './index.less';
import { MyImage } from '../../../../components/my-image';
import { iconPic } from '../../../../config/image';
import { RouteComponentProps } from 'react-router';
interface CommentsIndex extends RouteComponentProps {
    val: null,
    tabs: null,
}
class CommentsIndex extends Component<CommentsIndex>{

    state={
        detailsflage: 0
    }

    render() {
        const {detailsflage}=this.state
        return (
            <div className="comments-details-container">
                <div className="comments-details-container-con">
                    <div className="comments-details-top">
                        <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="question-image" />
                        <h1>评论详情</h1>
                    </div>
                    <div className="comments-details-center">
                        {
                            new Array(10).fill(1).map((item,key)=>
                            <div className={[
                                'comments-center-top',
                                detailsflage === key && 'active',
                            ].join(' ')} key={key} onClick={() => this.setState({ detailsflage: key })}>
                            <MyImage src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} className="center-top-left-image" />
                            <div className="comments-center-right">
                                <div className="comments-center-top-left">
                                    <h3>毒岛百合子</h3>
                                    <p className="top-left-distance">
                                        <span>2019/10/24 23:00</span>
                                        {/* <span className="minutes">33分钟前</span> */}
                                    </p>
                                    <p className="top-left-text">
                                    看来大家都是懒人~
                                    </p>
                                </div>
                                <div className="tabs-Release-con-right">
                                    <MyImage src={iconPic.rod} className="Release-con-right-image" />
                                    <span>346</span>
                                </div>
                            </div>
                        </div>
                       )}
                    </div>
                    <div className="comments-details-footer">
                        <input placeholder="回复评论" className="reply-comment"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default CommentsIndex