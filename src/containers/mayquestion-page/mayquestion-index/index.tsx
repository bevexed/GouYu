import React, { Component } from 'react';
import './index.less';
import { RouteComponentProps } from 'react-router';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { Tabs, WhiteSpace } from 'antd-mobile';
interface MayQuestionIndex extends RouteComponentProps {
    val: null,
    tabs: null,
    files: null,
}

class MayQuestionIndex extends Component<MayQuestionIndex>{
    state = {
        val: 1,
        tabs: [
            { title: '提问' },
            { title: '回答' },
        ]

    }
    //提问
    renderQuestions = () => {
        return (
            <div className="mayquestion-ask">
                {
                    new Array(10).fill(1).map((item, key) =>
                        <div className="mayquestion-ask-con" key={key}>
                            <p>健身教学：连续22天的腹肌训练，很多女生去健身房除了用跑步机，对其他器械动作一头雾水。</p>
                            <div className="mayquestion-ask-con-right">
                                <span>20回答</span>
                                <span>33分钟前</span>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
    //回答
    renderAnswer = () => {
        return (
            <div className="mayquestion-answer">
                {new Array(10).fill(1).map((item, key) =>
                    <div className="Headlines" key={key}>
                        <div className="Headlines-con">
                            <p className="Headlines-con-tit">健身教学：连续22天的腹肌训练，很多女生去健身房除了用跑步机，对其他器械动作一头雾水</p>
                            <div className="headlines-con-img">
                                <MyImage className="headlines-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577774306343&di=9513ed808d895914506fd67f1070774f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170512%2Fceb4c51b34c54032a65e1fb23af7eeaa_th.jpg'} />
                                <MyImage className="headlines-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577785236487&di=ecae8c37c6ab058ae6e6439371e25d9b&imgtype=0&src=http%3A%2F%2Fpic.eastlady.cn%2Fuploads%2Ftp%2F201703%2F9999%2F3732714ab0.jpg'} />
                                <MyImage className="headlines-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577774306343&di=9513ed808d895914506fd67f1070774f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170512%2Fceb4c51b34c54032a65e1fb23af7eeaa_th.jpg'} />
                            </div>
                            <p className="headlines-con-footer">
                            健身教学：连续22天的腹肌训练，很多女生去健身房除了用跑步机，对其他器械动作一头雾水。
                            </p>
                            <div className="mayquestion-ask-con-right">
                                <span>20回答</span>
                                <span>33分钟前</span>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        )
    }

    TabExample = () => {
        const { tabs } = this.state
        return (
            <div className="container-tabs-con">
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}
                    tabBarBackgroundColor={'#F8F9FA'}
                    tabBarActiveTextColor='#262D2C'
                >
                    {this.renderQuestions()}
                   {this.renderAnswer()}
                </Tabs>
                <WhiteSpace />
                <div className="active"></div>
            </div>
        )
    }
    render() {
        return (
            <div className="mayquestion-container">
                <div className="mayquestion-container-top">
                    <MyImage src={iconPic.backBlack} onTouchEnd={() => this.props.history.goBack()} className="question-image" />
                    <h1>我的问答</h1>
                </div>
                <div className="mayquestion-container-tabs">
                    {this.TabExample()}
                </div>

            </div>
        )
    }

}

export default MayQuestionIndex