import React, { Component } from 'react';
import './index.less';
import { RouteComponentProps } from 'react-router';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { Tabs, WhiteSpace } from 'antd-mobile';
interface NearfinedIndex extends RouteComponentProps {
    val: null,
    tabs: null,
}

class NearfinedIndex extends Component<NearfinedIndex>{

    state = {
        val: 1,
        tabs: [
            { title: '最近发布' },
            { title: '距离最近' },
            { title: '一起跑过' },

        ]

    }
    // componentDidMount(){
    //     console.log(11111111)
    // }
    // tdfd = (a:number):number => {
    //     console.log(a)
    //     return a
    // }
    //最近发布
    LatelyRelease = () => {
        return (
            <div className="tabs-Release">
                {new Array(10).fill(1).map((item, key) => <div className="tabs-Release-con">
                    <div className="Release-center-top" key={key}>
                        <div className="center-top-left">
                                <MyImage src={'http://cdn.duitang.com/uploads/item/201410/21/20141021130151_ndsC4.jpeg'} className="center-top-left-image" />
                            <div className="center-top-right">
                                <h3>毒岛百合子</h3>
                                <p className="top-right-distance">
                                    <span>距你1.1km</span>
                                    <span className="minutes">33分钟前</span>
                                </p>
                            </div>
                        </div>

                        <div className="tabs-Release-con-right">
                            <MyImage src={iconPic.alarm_clock} className="Release-con-right-image" />
                            <span className="Release-con-right-data">11-10</span>
                            <span>18:30</span>
                        </div>
                    </div>
                    <div className="top-address">
                        <div className="top-address-con">
                            <MyImage src={iconPic.up} className="top-address-image" />
                            <span className="top-address-ellipsis">莫干山路登云路口摄影</span>
                        </div>
                        <i>至</i>
                        <div className="top-address-con">
                            <MyImage src={iconPic.end} className="top-address-image" />
                            <span className="top-address-ellipsis">莫干山路利尔达大厦时间的肌肤</span>
                        </div>
                    </div>
                    <div className="tabs-Release-title">
                        健身教学：连续22天的腹肌训练，很多女生去健身是接口接口那是你
                    </div>
                    <div className="headlines-con-img">
                        <MyImage className="headlines-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577774306343&di=9513ed808d895914506fd67f1070774f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170512%2Fceb4c51b34c54032a65e1fb23af7eeaa_th.jpg'} />
                        <MyImage className="headlines-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577785236487&di=ecae8c37c6ab058ae6e6439371e25d9b&imgtype=0&src=http%3A%2F%2Fpic.eastlady.cn%2Fuploads%2Ftp%2F201703%2F9999%2F3732714ab0.jpg'} />
                        <MyImage className="headlines-image" src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577774306343&di=9513ed808d895914506fd67f1070774f&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170512%2Fceb4c51b34c54032a65e1fb23af7eeaa_th.jpg'} />
                    </div>
                </div>
                )}
            </div>
        )
    }
    TabExample = () => {
        const { tabs } = this.state
        return (
            <div className="nearfined-tabs">
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}
                    tabBarActiveTextColor='#262D2C'
                >
                    {this.LatelyRelease()}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                   </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }

    render() {
        //console.log(this.props.history)
        return (
            // <div onClick={()=>this.tdfd(1)}>
            //     12133
            // </div>
            <div className="nearfined">
                <div className="nearfined-top-tit">
                    <MyImage src={iconPic.backBlack} onTouchEnd={()=>this.props.history.goBack()}className="nearfined-image" />
                    <h1>附近跑友团</h1>
                </div>
                {this.TabExample()}
            </div>
        )
    }
}



export default NearfinedIndex