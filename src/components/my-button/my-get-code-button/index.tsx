/**
 * @Description: 获取 code
 * @author 两万
 * @date 2019/12/29
 * @time 11:21
 */
import React, { FC, useEffect, useState } from 'react';
import './index.less';
import { Toast } from 'antd-mobile';

type Props = {
  cb: () => Promise<boolean>;
};
const MyGetCodeButton: FC<Props> = (props: Props) => {
  const [codeString, setCodeString] = useState('获取验证码');
  let [time, setTime] = useState(60);
  useEffect(() => {}, []);
  const getCode = async () => {
    let res = await props.cb();
    if (!res) {
      return
    }
    if (time < 60) {
      return Toast.show(time + 's后重发');
    }
    const sendSuccess = () => {
      let timer = setInterval(() => {
        setTime(--time);
        if (time < 0) {
          clearInterval(timer);
        }
        setCodeString(time + 's后重发');
      }, 1000);
    };
    sendSuccess();
    const sendFail = () => {};
    sendFail();
  };
  return (
    <div className="_my-get-code-button" onTouchEnd={getCode}>
      {codeString}
    </div>
  );
};

export default MyGetCodeButton;
