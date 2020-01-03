import React, { Component } from 'react';
import './index.less';
import { RouteComponentProps } from 'react-router';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { TextareaItem, ImagePicker } from 'antd-mobile';
interface QuestionIndex extends RouteComponentProps {
    val: null,
    tabs: null,
    files: null,
}
const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];
class QuestionIndex extends Component<QuestionIndex>{
    state = {
        files: data,
    }
    onChange = (files:any, type:any, index:any) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    render() {
        const { files } = this.state;
        return (
            <div className="question-container">
                <div className="question-container-top">
                    <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="question-image" />
                    <p>提问</p>
                </div>
                {/* <textarea placeholder="请输入" className="question-container-text"/> */}
                <div className="question-container-con">
                    <TextareaItem
                        placeholder="请输入问题~"
                        autoHeight
                        labelNumber={5}
                        className="question-container-text"
                    />
                </div>
                <div className="question-container-image">
                    <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 5}
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                    />
                </div>
            </div>
        )
    }
}

export default QuestionIndex