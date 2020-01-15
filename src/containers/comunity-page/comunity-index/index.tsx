import React, { FC, useEffect, useState } from 'react';
import './index.less';
import { MyTabBar } from '../../../components/my-tab-bar';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { useHistory } from 'react-router';
import { reqClassifyPageData } from '../../../redux/community-classify-page/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ReducersProps } from '../../../redux/store';
import { ClassifyPageDataProps } from '../../../redux/community-classify-page/reducer';
import {
  AjaxGetAnswerPageList,
  AjaxGetDynamicPageList,
  AjaxGetHeadlinesPageList
} from '../../../api/community-classify-page';

interface ComuntityIndexProps { }

const tabs = [
    { title: '热点' },
    { title: '动态' },
    { title: '头条' },
    { title: '问答' },
    { title: '同城' },
];

//热点
const RenderHot: FC<{}> = () => {
    const specialList = useSelector<
        ReducersProps,
        ClassifyPageDataProps
    >(state => state.classifyPageData);
    const { push } = useHistory()
    const [Hotflage, setHotflage] = useState();
    // const [Flage, setFlage] = useState(true);
    // const [activeFlage, setactiveFlage] = useState(false)
    //console.log('hot', specialList.records)
    // const gitvelink = (id: any) => {
    //     //setHotflage(id)
    //     console.log(1111111111)
    //     console.log('id',id)
    // }
    return (
        <div className="content-tabs-hot">

            {
                specialList.records && specialList.records.map((item: any) => {

                    return (
                        <div className="hot-content" key={item.id}>
                            <MyImage className="hot-image"
                                src={item.images ? item.images.split(',')[0] : `${item.video}?x-oss-process=video/snapshot,t_10000,m_fast,w_800`}
                                onClick={() => push(`/comunity/hot-details-page?id=${item.id}`)}
                            />
                            {item.video && <MyImage src={iconPic.play_v} className="play-video" />}
                            <p className="hot-content-tit">{item.content}</p>
                            <div className="hot-content-footer">
                                <div className="hot-content-footer-left">
                                    <MyImage src={item.headImage} className="footer-left-bg" />
                                    <span className="footer-left-tit">{item.nickName}</span>
                                </div>
                                <div className="hot-content-footer-right" onClick={() => setHotflage(item.id)} >
                                    {Hotflage === item.id ? < MyImage src={iconPic.active_love} className="footer-right-love" /> : < MyImage src={iconPic.default_link} className="footer-right-love" />}

                                    <span>{item.zanNumber}</span>
                                </div>
                            </div>
                        </div>
                    )

                })}
            <MyImage src={iconPic.camera} className="right-camera" />
        </div>

    )
}

//动态
const RenderDynamic: FC<{}> = () => {
    const { push } = useHistory()
    const [DynamicData, setDynamicData] = useState();

    useEffect(() => {
        const getDynamicData = async () => {
            const res = await AjaxGetDynamicPageList();
            //console.log('resDta', res);
            setDynamicData(res.data.records)
        };
        getDynamicData();
    }, [])
   // console.log('动态Data', DynamicData)
    return (
        <div className="content-tabs-dynamic">
            {/* <div className="tabs-dynamic-top">
                <div className="dynamic-top">
                    <span>范局态度，下午好!</span>
                    <div className="dynamic-top-right">
                        <div className="dynamic-top-right-icon"></div>
                        <MyImage src={iconPic.more} className="right-icon" />
                    </div>
                    <div className="top-triangle"></div>
                </div>
            </div> */}
            {
                DynamicData && DynamicData.map((item: any) =>
                    <div className="dynamic-center" key={item.id} >
                        <div className="dynamic-center-top">
                            <MyImage className="center-top-left" src={item.headImage} />
                            <div className="center-top-right">
                                <h3>{item.nickName}</h3>
                                <p>{item.createTime}</p>
                            </div>
                        </div>
                        <div onClick={() => push(`/comunity/dynamic-details-page?id=${item.id}`)}>
                            <p className="dynamic-center-text">{item.content}</p>
                            {
                                item.images && item.images.split(',').length >= 0 ? <div className="dynamic-center-image-list">{item.images.split(',').map((value: any) => <MyImage src={value} className="image-lest" key={value} />)}</div> :
                                    <div className="dynamic-center-image">
                                        <MyImage className="center-image" src={`${item.video}?x-oss-process=video/snapshot,t_10000,m_fast,w_800`} />
                                    </div>
                            }
                            <p className="dynamic-cente-footer-txt">
                                <span>#{item.cityName}</span>
                            </p>
                        </div>
                        <div className="dynamic-cente-footer">
                            <div className="cente-footer-g">
                                <MyImage src={iconPic.star} className="cente-footer-icon" />
                                <span>999</span>
                            </div>
                            {/* onClick={() => push('/comunity/comments-details-page')} */}
                            <div className="cente-footer-g" >
                                <MyImage src={iconPic.info} className="cente-footer-icon" />
                                <span>{item.zanNumber}</span>
                            </div>
                            <div className="cente-footer-g">
                                <MyImage src={iconPic.give_link} className="cente-footer-icon" />
                                <span>{item.zanNumber}</span>
                            </div>
                            <div className="cente-footer-g">
                                <MyImage src={iconPic.write} className="cente-footer-icon" />
                                <span>转发</span>
                            </div>
                        </div>
                    </div>
                )}
            <MyImage src={iconPic.camera} className="dynamic-camera" />
        </div>
    )
}
//头条
const RenderHeadlines: FC<{}> = () => {
    const [headlinesData, setheadlinesData] = useState();
    const { push } = useHistory()
    useEffect(() => {
        const getheadData = async () => {
            const res = await AjaxGetHeadlinesPageList();
            //console.log(res);
            setheadlinesData(res.data.records)
        };
        getheadData();
    }, [])
    console.log('headlinesData', headlinesData)
    return (
        <div className="Headlines-content">
            {headlinesData && headlinesData.map((item: any) =>
                <div className="Headlines" key={item.id} onClick={() => push(`/comunity/headline-details-page?id=${item.id}`)}>
                    <div className="Headlines-con">
                        <p className="Headlines-con-tit" style={{height:'4em'}} dangerouslySetInnerHTML={{__html:item.content}}></p>
                        {
                            item.images && item.images.split(',').length >= 0 ? <div className="dynamic-center-image-list">{item.images.split(',').map((value: any) => <MyImage src={value} className="image-lest" key={value} />)}</div> :
                                <div className="dynamic-center-image">
                                    <MyImage className="center-image" src={`${item.video}?x-oss-process=video/snapshot,t_10000,m_fast,w_800`} />
                                </div>
                        }
                        <p className="headlines-con-footer">
                            <span>{item.publisher}</span>
                            <span> {item.commentNumber}条评论 </span>
                            <span> {item.createTime}分钟前</span>
                        </p>
                    </div>
                </div>

            )}
        </div>
    )
}
//问答
const RenderAnswer: FC<{}> = () => {
    const [AnswerListData, setAnswerListData] = useState();
    const tokendata: any = localStorage.getItem('userInfo')
    const useinfo = JSON.parse(tokendata).user
    //console.log('useinfo', useinfo)
    useEffect(() => {
        const getAnswerListData = async () => {
            const resList = await AjaxGetAnswerPageList();
            //console.log('问答', resList)
            setAnswerListData(resList.data.records)
        };
        getAnswerListData();
    }, [])
    //console.log('AnswerData1231234', AnswerListData)
    const { push } = useHistory()
    return (
        <div className="answer-content">
            {useinfo && <div className="answer-content-top">
                <div className="answer-content-top-con">
                    <div className="answer-content-top-left">
                        <MyImage src={useinfo.headImage} className="answer-content-top-image" />
                        <div className="top-left-test">
                            <h3>{useinfo.nickName}</h3>
                            <span></span>
                        </div>
                    </div>
                    <div className="answer-content-top-right">
                        <MyImage src={iconPic.my_answer} className="my-answer" onTouchEnd={() => push('/mayquestion-page')} />
                        <MyImage src={iconPic.Ask_quize} className="Ask-quize" onTouchEnd={() => push('/question-page')} />
                    </div>
                </div>
            </div>}
            {AnswerListData && AnswerListData.map((item: any) =>
                <div className="Headlines" key={item.id} onClick={() => push(`/mayquestion-page/mayquestion-details-page?id=${item.id}`)}>
                    <div className="Headlines-con" >
                        <p className="Headlines-con-tit">{item.title}</p>
                        <div className="headlines-con-img">
                            {item?.images?.split(',').map((value: any) => <MyImage src={value} className="headlines-image" key={value} />)}
                        </div>
                        <p className="headlines-con-footer">
                            <span>狗鱼健康官方号</span>
                            <span>  {item.answerNumber}条评论 </span>
                            <span> {item.createTime}分钟前</span>
                        </p>
                    </div>
                </div>

            )}
        </div>
    )
}


//同城
const RenderWithCity: FC<{}> = () => {
    const { push } = useHistory()
    return (
        <div className="withcity-con">
            <div className="withcity-con-top">
                <div className="withcity-region">
                    <MyImage src={iconPic.dot} className="region-dot" />
                    <span>杭州市</span>
                </div>

                <div className="withcity-center" onTouchEnd={() => push('/nearfined-page')}>
                    <div className="head-portrait">
                        <MyImage src={'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1872580246,421170775&fm=26&gp=0.jpg'} className="region-Head" />
                        <MyImage src={'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1872580246,421170775&fm=26&gp=0.jpg'} className="region-Head" />
                        <MyImage src={'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1872580246,421170775&fm=26&gp=0.jpg'} className="region-Head" />
                        <MyImage src={'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1872580246,421170775&fm=26&gp=0.jpg'} className="region-Head" />
                        <MyImage src={'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1872580246,421170775&fm=26&gp=0.jpg'} className="region-Head" />
                    </div>
                    <p className="withcity-text">
                        附近有<span>59人</span>正在跑步
                    </p>
                    <div className="withcity-about">
                        约个跑
                    </div>
                </div>
            </div>
            <div className="withcity-con-list">
                {
                    new Array(10).fill(1).map((item, key) =>
                        <div className="hot-content" key={key}>
                            <MyImage className="hot-image" src={'https://img.alicdn.com/tfs/TB1vYlkdnZmx1VjSZFGXXax2XXa-468-644.jpg_320x5000q100.jpg_.webp'} />
                            <p className="hot-content-tit">此处是文字部分，此处是文字部分，此处是文字</p>
                            <div className="hot-content-footer">
                                <div className="hot-content-footer-left">
                                    <div className="footer-left-bg"></div>
                                    <span className="footer-left-tit">毒岛百合子</span>
                                </div>
                                <div className="hot-content-footer-right">
                                    <MyImage src={iconPic.active_love} className="footer-right-love" />
                                    <span>1646</span>
                                </div>

                            </div>
                        </div>
                    )}
            </div>

        </div>
    )
}
//tabs
interface TabExampleProps {
    set: (a: any) => void,
}
const TabExample: FC<TabExampleProps> = (props: TabExampleProps) => {
    const [listState, setListState] = useState();
    return (
        <div className="comunity-content-tabs">
            <WhiteSpace />
            <Tabs tabs={tabs} animated={false} useOnPan={false}
                tabBarActiveTextColor='#262D2C'
                onChange={(val) => {
                    setListState(val.title)
                    props.set(val.title)
                }}
            >
                {/* <div className="content-tabs-hot">
                {renderHot()}
            </div> */}
                <RenderHot />
                <RenderDynamic />
                <RenderHeadlines />
                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                Content of third tab
        </div> */}
                <RenderAnswer />
                <RenderWithCity />
            </Tabs>
            <WhiteSpace />
        </div>
    )
};

const ComuntityIndex: FC<ComuntityIndexProps> = (props) => {
    const [listState, setListState] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(reqClassifyPageData());
    }, [dispatch]);


    return <div className="comunity-index">
        <div className="comunity-index-header">
            <span className="header-title">社区</span>
            <MyImage src={iconPic.add_head} className="header-icon" />
        </div>
        <TabExample set={a => setListState(a)} />
        {/* <div onTouchEnd={() => setTest('456')}> {test}</div> */}
        {/* <MyImage src={'https://img.alicdn.com/tfs/TB1QUcMr7L0gK0jSZFxXXXWHVXa-440-470.png_240x5000q100.jpg_.webp'} />
        <input type="text" onChange={(e) => setTest(e.target.value)} /> */}

        {listState === '问答' ? null : <MyTabBar />}
    </div>
}



export default ComuntityIndex
