import React, { Component } from 'react';
import './index.less';
import { RouteComponentProps } from 'react-router';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { TextareaItem, ImagePicker, Button } from 'antd-mobile';
import { AjaxGetQuestionsPage, AjaxGetImagePage } from '../../../api/community-classify-page/'
import { isApp, AppGetBack } from '../../../util/dsbridge';
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
        image: [],
        imagedata:''
    }

    onChangeData = async (filedata: any, type: any, index: any) => {
        const fileda = filedata[0].file
        console.log('files', filedata)
        this.setState({
            files: filedata,
        });
        const res = await AjaxGetImagePage({ files: [{ files: fileda }] })
        console.log('res', res)
    }

    onChagevalue = (e: any) => {
        //console.log('e', e)
        this.setState({
            textareaData: e
        })
    }
    //提问
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


    onChange = async (e: any) => {
        e.preventDefault();
        const file = e.target.files[0];
        console.log('file',file)
        const formData = [];
        // 这里的 image 是字段，根据具体需求更改
        formData.push(file);
        this.setState({
            imagedata:formData
        })
        console.log('formData',formData)
        const res = await AjaxGetImagePage({ files:formData})
        console.log('resdata',res)
    };

    render() {
        const { files } = this.state;
        return (
            <div className="question-container">
                <div className="question-container-top">
                    <MyImage src={iconPic.backBlack} onTouchEnd={() => {
                        if (isApp()) {
                            return AppGetBack()
                        }
                        this.props.history.goBack()
                    }
                    } className="question-image" />
                    {/* <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="question-image" /> */}
                    <p onClick={this.onQuestion}>提问</p>
                </div>
                <div className="upload-container">
                    <input type="file" name="image" className="upload-input" onChange={this.onChange} />
                    <Button type="primary" className="upload-button">上传图片</Button>
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