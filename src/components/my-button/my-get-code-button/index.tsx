/**
 * @Description: 获取 code
 * @author 两万
 * @date 2019/12/29
 * @time 11:21
 */
import React, { FC, useEffect, useRef, useState } from 'react';
import './index.less';
import { Toast } from 'antd-mobile';

type Props = {
  cb: () => Promise<boolean>;
};
const MyGetCodeButton: FC<Props> = (props: Props) => {
  let intervalHandle = useRef<any>();
  let [codeString, setCodeString] = useState('获取验证码');
  let [time, setTime] = useState(60);

  useEffect(() => {
    return () => {
      time < 60 && clearTimeout(intervalHandle.current);
    };
  },[]);
  const getCode = async () => {
    let res = await props.cb();
    if (!res) {
      return;
    }
    if (time < 60) {
      return Toast.show(time + 's后重发');
    }
    intervalHandle.current = setInterval(() => {
      --time;
      codeString = time + 's后重发';

      if (time <= 0) {
        time = 60;
        codeString = '获取验证码';
        clearInterval(intervalHandle.current);
      }

      setTime(time);
      setCodeString(codeString);
    }, 1000);
  };
  return (
    <div className="_my-get-code-button" onTouchEnd={getCode}>
      {codeString}
    </div>
  );
};

export default MyGetCodeButton;
