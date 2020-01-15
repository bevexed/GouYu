import React, { Component } from 'react';
import './index.less';
import { RouteComponentProps } from 'react-router';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { TextareaItem, ImagePicker, Button } from 'antd-mobile';
import { AjaxGetQuestionsPage, AjaxGetImagePage } from '../../../api/community-classify-page/'
import { isApp, AppGetBack } from '../../../util/dsbridge';
import Axios from 'axios';
interface QuestionIndex extends RouteComponentProps {
    val: null,
    tabs: null,
    files: null,
}
class QuestionIndex extends Component<QuestionIndex>{
    state = {
        files: [],
        textareaData: '',
        image: [],
        imagedata:'',
        fileda:[]
    }

    onChangeData = async (filedata: any[], type: any, index: any) => {
        const fileda = filedata.map(item=> item.file)
        this.setState({
            files: filedata,
            fileda
        });
    }

    upLoad = async(files:any)=>{
        const formData = new FormData;
        files.forEach((element:any) => {
            formData.append('files',element)  
        });
        const res = await Axios({
            headers:{
                ['Content-Type']: 'multipart/form-data'
            },
            url:'/oss/uploadMany',
            method:"POST",
            data:formData
        })
    
        return res.data.data
    }

    onChagevalue = (e: any) => {
        this.setState({
            textareaData: e
        })
    }
    //提问
    onQuestion = async() => {
        const { textareaData, files, fileda } = this.state
        const images = await this.upLoad(fileda);
        const user = localStorage.getItem('token')
        const data = {
            title: textareaData,
            token: user,
            images:images.join(',')
        }
        AjaxGetQuestionsPage(data)
        this.props.history.push('/comunity-page')
    }

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