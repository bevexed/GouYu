import React, { FC, useState } from 'react';
import './index.less';
import { MyTabBar } from '../../../components/my-tab-bar';
import { MyImage } from '../../../components/my-image';
import { iconPic } from '../../../config/image';
import { Tabs, WhiteSpace } from 'antd-mobile';

interface ComuntityIndexProps { }

// const Onrnder:FC<{}> = () =>{
//     return(
//         <div>
//             123123213
//         </div>
//     )
// }
const tabs = [
    { title: '热点' },
    { title: '动态' },
    { title: '头条' },
    { title: '问答' },
    { title: '同城' },
];

const renderHot = () => {
    return (
        <div className="content-tabs-hot">
            {
                new Array(10).fill(1).map((item,key)=>
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

    )
}

const TabExample = () => (
    <div className="comunity-content-tabs">
        <WhiteSpace />
        <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
            {/* <div className="content-tabs-hot">
                {renderHot()}
            </div> */}
            {renderHot()}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                Content of second tab
        </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                Content of third tab
        </div>
        </Tabs>
        <WhiteSpace />
    </div>
);

const ComuntityIndex: FC<ComuntityIndexProps> = props => {
    //const [test, setTest] = useState('123')

    return <div className="comunity-index">
        <div className="comunity-index-header">
            <span className="header-title">社区</span>
            <MyImage src={iconPic.add_head} className="header-icon" />
        </div>
        {TabExample()}
        {/* <div onTouchEnd={() => setTest('456')}> {test}</div> */}
        {/* <MyImage src={'https://img.alicdn.com/tfs/TB1QUcMr7L0gK0jSZFxXXXWHVXa-440-470.png_240x5000q100.jpg_.webp'} />
        <input type="text" onChange={(e) => setTest(e.target.value)} /> */}

        <MyTabBar />
    </div>
}



export default ComuntityIndex