import React, { Component } from 'react';
import './index.less';
import { RouteComponentProps } from 'react-router';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { TextareaItem, ImagePicker } from 'antd-mobile';
import { AjaxGetQuestionsPage, AjaxGetImagePage } from '../../../api/community-classify-page/'
interface QuestionIndex extends RouteComponentProps {
    val: null,
    tabs: null,
    files: null,
}
// const data = [{
//     url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
//     id: '2121',
// }, {
//     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
//     id: '2122',
// }];
class QuestionIndex extends Component<QuestionIndex>{
    state = {
        files: [],
        textareaData: '',
        image: []
    }

    onChangeData = async (filedata: any, type: any, index: any) => {
        const fileda = filedata[0].url
        console.log('files', fileda)
        this.setState({
            files: filedata,
        });
        const res = await AjaxGetImagePage({ files: fileda })
        console.log('res', res)
    }

    onChagevalue = (e: any) => {
        //console.log('e', e)
        this.setState({
            textareaData: e
        })
    }

    onQuestion = () => {
        const { textareaData, files } = this.state
        const user = localStorage.getItem('token')
        const data = {
            title: textareaData,
            token: user,
            images: files[0]
        }
        console.log('files', files)
        AjaxGetQuestionsPage({ ...data })
        this.props.history.push('/comunity-page')
    }

    render() {
        const { files } = this.state;
        return (
            <div className="question-container">
                <div className="question-container-top">
                    <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="question-image" />
                    <p onClick={this.onQuestion}>提问</p>
                </div>
                {/* <textarea placeholder="请输入" className="question-container-text"/> */}
                <div className="question-container-con">
                    <TextareaItem
                        placeholder="请输入问题~"
                        autoHeight
                        labelNumber={5}
                        className="question-container-text"
                        onChange={this.onChagevalue}
                    />
                </div>
                <div className="question-container-image">
                    <ImagePicker
                        files={files}
                        onChange={this.onChangeData}
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