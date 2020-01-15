import React, { FC, useState, useEffect } from 'react';
import './index.less';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { SearchTabBar } from '../search-tab-bar';
import { useHistory } from 'react-router';
import { isApp, AppGetBack } from '../../../util/dsbridge';
import { AjaxGetMyCommunityPageList, AjaxGetCommunityAnswerPageList } from '../../../api/community-classify-page'
interface MayQuestionIndexProps { }
//提问
const RenderQuestions: FC<{}> = () => {
    const [QuestionsData, setQuestionsData] = useState();
    const usetoken = localStorage.getItem('token')
    useEffect(() => {
        const getQuestionsList = async () => {
            const res = await AjaxGetMyCommunityPageList({ token: usetoken });
            console.log('resDta', res);
            setQuestionsData(res.data.records)
        };
        getQuestionsList();
    }, [])
    console.log('getQuestionsList', QuestionsData)
    return (
        <div className="mayquestion-ask">
            {
                QuestionsData && QuestionsData.map((item: any) =>
                    <div className="mayquestion-ask-con" key={item.id}>
                        <p>{item.title}</p>
                        <div className="mayquestion-ask-con-right">
                            <span>20回答</span>
                            <span className="ask-con-right-date">{item.createTime}分钟前</span>
                        </div>
                    </div>
                )}
        </div>
    )
}
//回答
const RenderAnswer: FC<{}> = () => {
    const [AnswerData, setAnswerData] = useState();
    const usetoken = localStorage.getItem('token')
    useEffect(() => {
        const getAnswerDataList = async () => {
            const res = await AjaxGetCommunityAnswerPageList({ token: usetoken });
            //console.log('resDta', res);
            setAnswerData(res)
        };
        getAnswerDataList();
    }, [])
    console.log('AnswerDatalist', AnswerData)
    return (
        <div className="mayquestion-answer">
            <div className="mayquestion-answer-content">
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
        </div>
    )
}
const MayQuestionIndex: FC<MayQuestionIndexProps> = (props) => {



    const [SearchBarState, setSearchBarState] = useState(0);
    const { go } = useHistory();
    return (

        <div className="mayquestion-container">
            <div className="mayquestion-container-top">
                <MyImage src={iconPic.backBlack} onTouchEnd={() => {
                    if (isApp()) {
                        return AppGetBack()
                    }
                    go(-1)
                }
                } className="question-image" />
                {/* <MyImage src={iconPic.backBlack} onTouchEnd={ () => go(-1) } className="question-image" /> */}
                <h1>我的问答</h1>
            </div>
            <div className="mayquestion-container-tabs">
                {/* {this.TabExample()} */}

            </div>
            <SearchTabBar
                getSearchBarState={SearchBarState => setSearchBarState(SearchBarState)}
            />
            {
                SearchBarState == 0 ? <RenderQuestions /> : <RenderAnswer />
            }
        </div>
    )

}

export default MayQuestionIndex